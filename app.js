const form = document.querySelector('.signup');
const email = document.querySelector('#email');
const subBtn = document.getElementById('btn')

// function validateEmail() {
//   form.addEventListener('submit', e => {
//     e.preventDefault();
  
//     let isEmailValid = checkEmail();
//     let isFormValid = isEmailValid;
  
//     if (isFormValid) {
      
//     }
  
//   });

//   subBtn.trigger("click");
//   alert("Submit button clicked!");
//   return true;
// }

form.addEventListener('submit', e => {
  e.preventDefault();

  let isEmailValid = checkEmail();
  let isFormValid = isEmailValid;

  if (isFormValid) {
    
  }

});

const validEmailCheck = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
  const signup = input.parentElement;

  signup.classList.remove('success');
  signup.classList.add('error');

  const error = signup.querySelector('small');
  error.textContent = message;
}

const showSuccess = (input, message) => {
  const signup = input.parentElement;

  signup.classList.remove('error');
  signup.classList.add('success');

  const error = formField.querySelector('small');
  error.textContent = '';
}

const checkEmail = () => {
  let valid = false;
  const emailVal = email.value.trim();

  if (!isRequired(email)) {
    showError(emailVal, 'Whoops! It looks like you forgot to add your email!');
  } else if (!isEmailValid(email)) {
    showError(emailVal, 'Please provide a valid email address.')
  } else {
    showSuccess(emailVal);
    valid = true;
  }
  return valid;
}
