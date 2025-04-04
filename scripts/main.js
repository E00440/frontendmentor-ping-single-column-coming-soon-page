let inputElement = document.querySelector('.js-main-email-input');

const buttonElement = document.querySelector('.js-main-submit-button');

const errorElement = document.querySelector('.js-error-text');

buttonElement.addEventListener('click', () => {
  if (inputElement.value === '') {
    invalidEmailInput();
  } else if (!inputElement.value.includes('@')) {
    invalidEmailInput();
  } else if (!inputElement.value.includes('.')) {
    invalidEmailInput();
  } else {
    validEmailInput();
  }
});

inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if(inputElement.value === '') {
      invalidEmailInput();
    } else if (!inputElement.value.includes('@')) {
      invalidEmailInput();
    } else if (!inputElement.value.includes('.')) {
      invalidEmailInput();
    } else {
      validEmailInput();
    }
  }
});


function invalidEmailInput() {
  errorElement.innerHTML = `<em>please provide a valid email address</em>`;
  errorElement.classList.add('error-display');
  inputElement.classList.add('invalid-email-input');
  errorElement.classList.remove('subscribed-display');
}

function validEmailInput() {
  inputElement.value = '';
  inputElement.classList.remove('invalid-email-input');
  errorElement.classList.remove('error-display');
  errorElement.innerHTML = `<em>Subscribed!</em>`
  errorElement.classList.add('subscribed-display');

  setTimeout(() => {
    subscribedTimeout();
  }, 3000);
}

function subscribedTimeout() {
  errorElement.innerHTML = '';
}