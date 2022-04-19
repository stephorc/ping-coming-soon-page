const form = document.getElementById('form');
const email = document.getElementById('email');
//const addErrorDiv = document.createElement('div');
//const addSuccessDiv = document.createElement('div');
//let message = 'Whoops! It looks like you forgot to add your email!';

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const validEmailCheck = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
  const inputCntrl = element.parentElement;
  const errorDisplay = inputCntrl.querySelector('.error');

  errorDisplay.innerText = message;
  inputCntrl.classList.add('error');
  inputCntrl.classList.remove('success');
}

const setSuccess = element => {
  const inputCntrl = element.parentElement;
  const errorDisplay = inputCntrl.querySelector('.error');

  errorDisplay.innerText = '';
  inputCntrl.classList.add('success');
  inputCntrl.classList.remove('error');
}

const validateInputs = () => {
  const emailValue = email.ariaValueMax.trim();

  if(emailValue === '') {
    setError(error, 'Whoops! It looks like you forgot to add your email!');
  } else if (!validEmailCheck(emailValue)) {
    setError(error, 'Please provide a valid email address.');
  } else {
    setSuccess(error);
  }
}

// function validateEmail() {
//   validateInputs();
//  }

// if (email.value = '') {
//   addErrorDiv.innerText = message;
//   form.appendChild(addErrorDiv);
// } else {
//   let message2 = 'Success!'
//   addSuccessDiv.innerText = message2;
//   form.appendChild(addErrorDiv);
// }


// Submit their email address using an `input` field:
// Receive an error message when the `form` is submitted if:

// The `input` field is empty. The message for this error should say
// *"Whoops! It looks like you forgot to add your email"*

// The email address is not formatted correctly
// (i.e. a correct email address should have this structure: `name@host.tld`).

// The message for this error should say *"Please provide a valid email address"*
