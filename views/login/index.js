import { showNotification } from "../components/notification.js";

// Selectors
const form = document.querySelector('#form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const notification = document.querySelector('#notification');

form.addEventListener('submit', async e => {
  try {
    e.preventDefault();
    const credentials = {
      email: emailInput.value,
      password: passwordInput.value
    }
    const { data } = await axios.post('/api/login', credentials);
    console.log(data);

    //verificarrrrr
    window.location.pathname = `/app/${data}`;

  } catch (error) {
    console.log(error);
    showNotification(error.response.data.error, true, notification);
  }
});