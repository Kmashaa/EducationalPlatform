import {db, getCookie} from "./auth.js";
import {doc, getDoc, updateDoc, where, query, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
import {themesDocRef} from "./add_course";

const docRef =  doc(db, "themes", "Gw3BaLwGeAAo5An8CtsM");

const addTestForm = document.getElementById('addTestForm');
addTestForm.addEventListener('submit',async (e) => {
  e.preventDefault();
  const name = document.getElementById('text').value;
  const course_name = sessionStorage.getItem('course_name');
  const theme = sessionStorage.getItem('theme');
  await AddTestToDb(name, course_name, theme);
  sessionStorage.setItem('test_name', name);
});
async function AddTestToDb(name, course_name, theme){
  let ref = await getDoc(themesDocRef);
  var themes = ref.data();
  let currTheme = themes;
  while(currTheme.next != null) {
    if (currTheme.name === theme) {
      var currCourse = currTheme.courses;

      while(currCourse !== null && currCourse.name !== name ){
        currCourse = currCourse.next;
      }
      if (currCourse === null){
        alert("No such course")
        break;
      }
      currCourse.test = {text: "Foundations of history",

        questions: null
      };
      await updateDoc(docRef, themes);
      break;
    }
    else {
      currTheme = currTheme.next;
    }
  }
}
