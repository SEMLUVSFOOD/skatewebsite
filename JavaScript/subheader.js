document.addEventListener('DOMContentLoaded', function() {
    var opensubnav = document.getElementById('opensubnav');
    var subheader = document.querySelector('.subheader');

    opensubnav.addEventListener('click', function() {
      subheader.classList.toggle('show');
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var opensubnav = document.getElementById('opensubnav');
    var smallerBars = document.querySelectorAll('.bar:not(.top-bar)');
  
    opensubnav.addEventListener('click', function() {
      for (var i = 0; i < smallerBars.length; i++) {
        smallerBars[i].classList.toggle('animate');
      }
    });
  });

// Check if the user has visited the website before
if (!document.cookie.includes("visited=true")) {
  // Show the alert
  alert("Warning: This website is fan-made and not official.");

  // Set a cookie to track the visit, expires in one day
  var expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1);
  document.cookie = "visited=true; expires=" + expiryDate.toUTCString();
}
