window.addEventListener('DOMContentLoaded', function() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        var labels = document.querySelectorAll('label');
        
        labels.forEach(function(label) {
          label.classList.remove('selected');
        });
        
        this.parentNode.classList.add('selected');
      });
    });
  });
  