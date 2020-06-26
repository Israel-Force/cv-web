
const btn = document.querySelector('.menu-btn')
let burger = document.querySelector('.menu-btn_burger')
let aside = document.querySelector('.navbar')
let nav = document.querySelector('.nav')
let content = document.querySelectorAll('.dropdown-content')
let dropbtn = document.querySelectorAll('.dropbtn')
let dropdwn = document.querySelectorAll('.dropdown')

/*Burger*/
btn.addEventListener('click', togglebtn)
let executed = false
function togglebtn () {
  if (!executed) {
    burger.classList.add('open') 
    aside.classList.add('open')
    nav.classList.add('open')  
    executed = true
    } else {
    burger.classList.remove('open')
        aside.classList.remove('open') 
        nav.classList.remove('open')
        executed = false
    }
}

/*Dropdown */
dropdwn.forEach(function (item)
{ 
item.addEventListener('click', function () { openDropbtn(this) }) 
})

var show = false
function openDropbtn (btn) {
  for (var i = 0; i < content.length; i++) {
    content[i].classList.contains('open')
    content[i].classList.remove('open')
  }
  if (!show) {
    var nxt = btn.firstChild.nextElementSibling.nextElementSibling;
      nxt.classList.add('open')
        show = true
        } else {
          var nxt = btn.firstChild.nextElementSibling.nextElementSibling;
          nxt.classList.remove('open')
          show = false;
        
        }
}

/*window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
        var i
        for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
          if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open')
          }
    }
  }
}*/

/*Tabbed Panel */
var tabLinks = document.querySelectorAll('.tablinks')

tabLinks.forEach(function (items) { items.addEventListener('click', function () { openEdu(event, this.textContent) }) })

function openEdu (evt, edu) {
  var tabcontent = document.getElementsByClassName('tabcontent')
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  var tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(edu).style.display = 'block';
  evt.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click()



/*Greeting*/
var today = new Date()
        var hourNow = today.getHours()
        var greeting
        if (hourNow >= 18) {
  greeting = 'GOOD EVENING!!'
        } else if (hourNow >= 12) {
  greeting = 'GOOD AFTERNOON!!'
} else if (hourNow > 0) {
  greeting = 'GOOD MORNING!!'
} else {
  greeting = 'WELCOME'
}
var time = document.getElementById('time')
time.innerHTML = greeting


/*Accordion*/

var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  })
}
