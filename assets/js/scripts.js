$(function() { 

    const textElement = document.querySelector('.typing-subtitle');
   
    /** Typing-erasing animation **/
    const words = ['Programmer', 'Web Designer', 'Electrician', 'Mentor'];
    let wordIndex = 0;
    let charIndex = 1;
    let isDeleting = false;

    function type() {
      const word = words[wordIndex];
      const speed = isDeleting ? 50 : 120;
      textElement.textContent = word.substring(0, charIndex);
      charIndex += isDeleting ? -1 : 1;
      if (charIndex > word.length) {
        textElement.classList.add('glow');
        isDeleting = true;
      }
      if (charIndex === 1) {
        isDeleting = false;
          textElement.classList.remove('glow');
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, speed);
    }

    type();     
              
});

/* Scroll to Top button */
$(document).ready(function() {
    var $scrollButton = $("#scrollTop");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $scrollButton.fadeIn();
        } else {
            $scrollButton.fadeOut();
        }
    });

    $scrollButton.click(function() {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});

