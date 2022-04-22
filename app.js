const form = document.querySelector('.form');
const email = document.querySelector('#email');
// const inputEl = document.querySelector('input');

form.addEventListener('submit', e => {
  e.preventDefault();

  let isEmailValid = checkEmail();
  let isFormValid = isEmailValid;

  if (isFormValid) {
    console.log('working...');
  }
});

const isEmailValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
  const form = input.parentElement;

  input.classList.remove('success');
  input.classList.add('error');

  const error = form.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input, message) => {
  const form = input.parentElement;

  input.classList.remove('error');
  input.classList.add('success');

  const error = form.querySelector('small');
  error.textContent = '';
};

const checkEmail = () => {
  let valid = false;
  const emailVal = email.value.trim();

  if (!isRequired(email)) {
    showError(emailVal, 'Whoops! It looks like you forgot to add your email!');
  } else if (!isEmailValid(email)) {
    showError(emailVal, 'Please provide a valid email address.');
  } else {
    showSuccess(emailVal);
    valid = true;
  }
  return valid;
};
