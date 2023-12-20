import {register} from './auth.js';

const authForm = document.getElementById('authForm');
authForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;
  const users_name = document.getElementById('users_name').value;
  const password2 = document.getElementById('pass2').value;
  if (password !== password2) {
    alert("Passwords don't match");
    password.value = "";
    password2.value = "";
    return;
  }
  else {

    register(email,password,users_name);}
});

