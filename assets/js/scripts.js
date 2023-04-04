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

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: 'AIzaSyBKAN9Hqu2Ha3xr0V0bXq21tAJ0c2b-75Q',
    clientId: 'YOUR_CLIENT_ID',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
    scope: 'https://www.googleapis.com/auth/gmail.readonly'
  }).then(function() {
    // Authorize the user
    return gapi.auth2.getAuthInstance().signIn();
  }).then(function() {
    // The user is authorized, you can now use the Gmail API
  }, function(error) {
    console.log(error);
  });
}


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

    function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var request = gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {
        'raw': btoa(
          'To: ' + email + '\n' +
          'Subject: ' + subject + '\n\n' +
          message
        )
      }
    });

    request.execute(function(response) {
      console.log(response);
    });
  }
});

