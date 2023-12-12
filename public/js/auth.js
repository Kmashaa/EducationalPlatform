import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getDatabase,ref,child, get,set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
import {addDoc,getFirestore,collection} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

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
export const db = getFirestore(app);
const courseRef = await addDoc(collection(db, 'themes'),{
  "name": "Math",
  "courses":{
    "name": "Foundations of math",
    "descr":"First step",
    "text":"First step in learning mathematics. You will learn Addition, Subtraction, Multiplication and Division",
    "num":4.9,
    "href":"course_information_page.html",
    "lessons":{
      "name":"Addition",
      "text":"Addition is one of the basic operations that allows you to combine two terms. Addition notation: 8 + 3 = 11\n8 and 3 - terms\n11 - sum",
      "next":{
        "name":"Substraction",
        "text":null,
        "next":{
          "name":"Multiplication",
          "text":null,
          "next":{
            "name":"Division",
            "text":null,
            "next":null
          }
        }
      }
    },
    "comments":{
      "text":"Good!",
      "mark":"4.9",
      "next":{
        "text":"I like it",
        "mark":"4.5",
        "next":{
          "text":"Not bad",
          "mark":"4.0",
          "next":{
            "text":")))",
            "mark":"5.0",
            "next":null
          }
        }
      }
    },
    "test":{
      "text":"Checking basic skills (addition, substraction, multiplication, division)",
      "questions":{
        "question":"1+3=?",
        "answers":{
          "text":"2",
          "correctness":"0",
          "next":{
            "text":"3",
            "correctness":"0",
            "next":{
              "text":"4",
              "correctness":"1",
              "next":{
                "text":"5",
                "correctness":"0",
                "next":null
              }
            }
          }
        },
        "next":{
          "question":"5-2=?",
          "answers":{
            "text":"1",
            "correctness":"0",
            "next":{
              "text":"2",
              "correctness":"0",
              "next":{
                "text":"3",
                "correctness":"1",
                "next":{
                  "text":"4",
                  "correctness":"0",
                  "next":null
                }
              }
            }
          },
          "next":{
            "question":"10*2=?",
            "answers":{
              "text":"10",
              "correctness":"0",
              "next":{
                "text":"20",
                "correctness":"1",
                "next":{
                  "text":"30",
                  "correctness":"0",
                  "next":{
                    "text":"40",
                    "correctness":"0",
                    "next":null
                  }
                }
              }
            },
            "next":{
              "question":"45/5=?",
              "answers":{
                "text":"8",
                "correctness":"0",
                "next":{
                  "text":"9",
                  "correctness":"1",
                  "next":{
                    "text":"10",
                    "correctness":"0",
                    "next":{
                      "text":"20",
                      "correctness":"0",
                      "next":null
                    }
                  }
                }
              },
              "next":null
            }
          }
        }
      }
    },
    "next": {
      "name": "Multiplication table",
      "descr":"A new level of learning mathematics",
      "text": null,
      "num": 4.8,
      "href": "course_information_page.html",
      "lessons": null,
      "comments":null,
      "next": null
    }
  },
  "href":"courses_list_page.html",
  "next": {
    "name": "English",
    "href":"courses_list_page.html",
    "courses":null,
    "next": {
      "name": "History",
      "href":"courses_list_page.html",
      "courses":null,
      "next": {
        "name": "Biology",
        "courses":{
          "name": "Learning biology",
          "descr":"Cell - the basis of the structure",
          "text": null,
          "num": 4.7,
          "href": "course_information_page.html",
          "lessons": null,
          "comments":null,
          "next": {
            "name": "Basic biology",
            "descr":"Phytology",
            "text": null,
            "num": 4.6,
            "href": "course_information_page.html",
            "lessons": null,
            "comments":null,
            "next": {
              "name": "One more",
              "descr":"Cell - the basis of the structure",
              "text": null,
              "num": 4.5,
              "href": "course_information_page.html",
              "lessons": null,
              "comments":null,
              "next": null
            }
          }
        },
        "href":"courses_list_page.html",
        "next": {
          "name": "One more",
          "href":"courses_list_page.html",
          "courses":null,
          "next": {
            "name": "One more",
            "href":"courses_list_page.html",
            "courses":null,
            "next": {
              "name": "Math",
              "href":"courses_list_page.html",
              "courses":null,
              "next":  null
            }
          }
        }
      }
    }
  }
});



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
      window.location.href="home_page.html";
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
