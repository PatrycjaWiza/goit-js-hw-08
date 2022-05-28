// lodash library
const _ = require('lodash');
// constants
const form = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
//storage functions
const save = (key, value) => {
  try {
    const stringifyJSON = JSON.stringify(value);
    localStorage.setItem(key, stringifyJSON);
  } catch (error) {
    console.error('Error message: ', error.message);
  }
};
const load = key => {
  try {
    const getStorageItem = localStorage.getItem(key);
    return getStorageItem === null ? undefined : JSON.parse(getStorageItem);
  } catch (error) {
    console.error('Error message: ', error.message);
  }
};
//get data from form on input
form.addEventListener('input', _.throttle(saveInput, 500));
//clear form & localStorage on submition
form.addEventListener('submit', clear);

// updates form values from localStorage
try {
  form.email.value = load(LOCALSTORAGE_KEY).email;
  form.message.value = load(LOCALSTORAGE_KEY).message;
} catch (error) {
  console.log('Local storage is empty:', error.message);
}
// setting to localStorage

function saveInput(e) {
  try {
    const { email, message } = e.currentTarget;
    const object = { email: email.value, message: message.value };
    save(LOCALSTORAGE_KEY, object);
  } catch (error) {
    console.log(error.message);
  }
}
// clear localStorage & form and load data to console
function clear(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget;
  console.log(`email: ${email.value}, message: ${message.value}`);
  localStorage.clear();
  e.currentTarget.reset();
}
