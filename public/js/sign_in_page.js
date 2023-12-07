// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js'
// import {signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'
import {authorize} from './auth.js'



const authForm = document.getElementById('authForm');

authForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;
  authorize(email,password);
  });

// let db=d;
// let dbr=dbRef;
// window.alert(dbr);
