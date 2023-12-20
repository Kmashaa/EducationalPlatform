import {ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import {getCookie, database} from "./auth.js"
localStorage.setItem('my_courses',[]);

let result = sessionStorage.getItem('result');
let course_name = sessionStorage.getItem('courseName');
let theme_name = sessionStorage.getItem('themeName');

let res_text = document.createElement('span');
res_text.className = "result__text";
if (result === "true") {
  document.getElementById("result-data__header").textContent = "Good result!";
  res_text.textContent = "You have completed test of course: " + course_name;
  let temp_c = localStorage.getItem('my_courses').split(",");
  let temp = [];
  let temp_c_name = sessionStorage.getItem('courseName');
  let i = 0;

  let is_existing = "False";
  while (i < temp_c.length) {

    temp[i] = temp_c[i];
    if (temp[i] == temp_c_name) {
      is_existing = "True"
    }
    i = i + 1;
  }
  if (is_existing == "False") {
    temp[i] = temp_c_name;

  }
  // localStorage.setItem('my_courses', temp);

} else {
  document.getElementById("result-data__header").textContent = "Bad result";
  res_text.textContent = "You haven't completed test of course: " + course_name + ". Try again"
}
localStorage.setItem('my_courses',[]);

document.getElementById("result").append(res_text);
document.getElementById("button_profile").textContent = "Profile";


// localStorage.setItem('my_courses',[]);



