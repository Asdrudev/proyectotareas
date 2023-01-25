import { showNotification } from "../components/notification.js";

// Selectors
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const formBtn = document.querySelector('#form-btn');
const notification = document.querySelector('#notification');

// Regex
const NAME_REGEX = /^[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[A-Z][a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)$/;

// Validations
let nameValidation = false;

nameInput.addEventListener('input', e => {
  nameValidation = NAME_REGEX.test(e.target.value);
  const xIcon = nameInput.parentElement.children[1].children[0];
  const checkIcon = nameInput.parentElement.children[1].children[1];
  
  if (nameInput.value === '') {
    checkIcon.classList.add('hidden');
    xIcon.classList.add('hidden');
  } else if (!nameValidation) {
    xIcon.classList.remove('hidden');
    checkIcon.classList.add('hidden');
  } else {
    xIcon.classList.add('hidden');
    checkIcon.classList.remove('hidden');
  }
});

form.addEventListener('submit', async e => {
  try {
    e.preventDefault();
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    }
    const { data } = await axios.post('/api/users', newUser);
    console.log(data);
    showNotification(`Email ${data.email} creado exitosamente 😎`, false, notification);
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    matchInput.value = '';
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
    showNotification(error.response.data.error, true, notification);
  }
});