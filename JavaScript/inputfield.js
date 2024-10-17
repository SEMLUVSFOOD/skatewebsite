var inputElement = document.getElementById("inputfield");

function clearInput() {
    if (inputElement.value === "Email") {
      inputElement.value = "";
      inputElement.style.color = "black";
    }
  }
  function restoreInput() {
    if (inputElement.value === "") {
      inputElement.value = "Email";
      inputElement.style.color = "gray";
    }
  }


  function checkLicense() {
    var licenseCheckbox = document.getElementById("license");
    var inputElement = document.getElementById("inputfield");
    var inputValue = inputElement.value;
  
    if (licenseCheckbox.checked) {
      if (inputValue.indexOf("@") !== -1) {
        alert("License agreement checked!\nInput field contains '@' symbol.");
        // Perform additional actions here if needed
      } else {
        alert("License agreement checked!\nInput field does not contain '@' symbol.");
      }
    } else {
      const signup = document.getElementById('signup');
        signup.style.backgroundColor = "green";
    }
  }
  
  const seemore = document.getElementById('seemorepost')
  seemore.addEventListener("click", function () {
    location.replace("./skatewebsitevideos.html")
  });