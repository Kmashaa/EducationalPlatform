import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getDatabase,ref,child, get,set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyDbsgrzEfiYQnhMXC0YoF5uCZdaI3oHWt8",
  authDomain: "learning-platform-15c7d.firebaseapp.com",
  databaseURL: "https://learning-platform-15c7d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learning-platform-15c7d",
  storageBucket: "learning-platform-15c7d.appspot.com",
  messagingSenderId: "606647335289",
  appId: "1:606647335289:web:a43b2efed0a2579695d7a8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



export function getCookie(name) {
  const cookies = document.cookie.split(';');
  // window.alert(cookies);
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // window.alert(cookie);
    if (cookie.startsWith(name + '=')) {
      // window.alert(cookie.substring(name.length + 1));

      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

export function authorize(email,password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      document.cookie = "uid" + "=" + user.uid;
      document.cookie="username"+"="+email.split("@")[0];
      window.location.href="profile_page.html";
    })
    .catch((error) => {
      window.alert("Wrong email or password. Please, try again. ");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function register(email,password){
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.cookie = "uid" + "=" + user.uid;
      document.cookie="username"+"="+email.split("@")[0];
      window.location.href="profile_page.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(errorMessage);
      // ..
    });
}

export const database = getDatabase(app);
// const databasee = ge();
// window.alert(database.t);
export const dbRef = ref(database);

export function readdata(){
  get(child(dbRef, `users/${getCookie("uid")}/theme_name/`)).then((snapshot) => {
    if (snapshot.exists()) {
      window.alert(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
