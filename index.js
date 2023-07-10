// Smooth Scrolling
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// Typewriter Effect
const typeText = document.querySelector('.typewriter-effect');
const text = typeText.textContent;
const splitText = text.split('');
typeText.textContent = '';

for (let i = 0; i < splitText.length; i++) {
  typeText.innerHTML += '<span>' + splitText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = typeText.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;

  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// Contact Form Submission
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  submitButton.disabled = true;
  const formData = new FormData(form);

  fetch('submit-form.php', {
    method: 'POST',
    body: formData
  })
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(function(responseText) {
      confirmationMessage.textContent = responseText;
      form.reset();
    })
    .catch(function(error) {
      console.error(error);
      confirmationMessage.textContent =
        'There was a problem submitting your form. Please try again later.';
    })
    .finally(function() {
      submitButton.disabled = false;
    });
});