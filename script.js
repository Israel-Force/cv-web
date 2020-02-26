 function myFunction() {
            document.getElementById('myDropdown').classList.toggle("show");
        }
        function myFunction1() {
            document.getElementById('myDropdown1').classList.toggle("show");
        }function myFunction2() {
            document.getElementById('myDropdown2').classList.toggle("show");
        }function myFunction3() {
            document.getElementById('myDropdown3').classList.toggle("show");
        }
        function myFunction4() {
            document.getElementById('myDropdown4').classList.toggle("show");
        }
       window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

        var today = new Date();
        var hourNow = today.getHours();
        var greeting;
        if (hourNow > 18) {
            greeting = 'GOOD EVENING';
        } else if (hourNow > 12) {
            greeting = 'GOOD AFTERNOON'
        } else if (hourNow > 0) {
            greeting = 'GOOD MORNING'
        } else {
            greeting = 'WELCOME'
        }
        var time = document.getElementById('time')
        time.innerHTML = greeting