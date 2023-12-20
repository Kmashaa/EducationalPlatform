import {db, getCookie} from "./auth.js"
import { doc , getDoc, updateDoc,setDoc ,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


let course_name = sessionStorage.getItem('courseName');
function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}
let themes__list = {
  name: "Math",
  courses: {
    name: "Foundations of math",
    descr: "First step",
    text: "First step in learning mathematics. You will learn Addition, Subtraction, Multiplication and Division",
    num: 4.9,
    href: "course_information_page.html",
    next: {
      name: "Multiplication table",
      descr: "A new level of learning mathematics",
      text: null,
      num: 4.8,
      href: "course_information_page.html",
      next: null
    }
  },
  href: "courses_list_page.html",
  next: {
    name: "English",
    href: "courses_list_page.html",
    courses: null,
    next: {
      name: "History",
      href: "courses_list_page.html",
      courses: null,
      next: {
        name: "Biology",
        courses: {
          name: "Learning biology",
          descr: "Cell - the basis of the structure",
          text: null,
          num: 4.7,
          href: "course_information_page.html",
          next: {
            name: "Basic biology",
            descr: "Phytology",
            text: null,
            num: 4.6,
            href: "course_information_page.html",
            next: {
              name: "One more",
              descr: "Cell - the basis of the structure",
              text: null,
              num: 4.5,
              href: "course_information_page.html",
              next: null
            }
          }
        },
        href: "courses_list_page.html",
        next: {
          name: "One more",
          href: "courses_list_page.html",
          courses: null,
          next: {
            name: "One more",
            href: "courses_list_page.html",
            courses: null,
            next: {
              name: "Math",
              href: "courses_list_page.html",
              courses: null,
              next: null
            }
          }
        }
      }
    }
  }
};
const docRef=await getDoc(doc(db,"themes","courses"));
const docSnap=docRef.data()
themes__list=docSnap;
let temp_c=localStorage.getItem('my_courses').split(",")[1];

document.getElementById('course-data__header').textContent = course_name;


// const docRef =  doc(db, "bought_courses", getCookie("uid"));
// const docSnap = await getDoc(docRef);
// let data = docSnap.data();
// let cond=checkAvailability(data["course_names"],course_name);
if(!getCookie("uid")){
  document.getElementById('button__test').style.display = "None";
  document.getElementById('button__pay').style.display = "None";
  document.getElementById('button__lessons').style.display = "None";
}
else {
  const docRef =  doc(db, "bought_courses", getCookie("uid"));
  const docSnap = await getDoc(docRef);
  let data = docSnap.data();
  let cond=checkAvailability(data["course_names"],course_name);
  const roleRef=await getDoc(doc(db,"users",getCookie("uid")));
  const roleSnap=roleRef.data()
  const users_role=roleSnap["role"];
  if (users_role=="moderator") {}
  else if (!cond) {
    //document.getElementById('button__lessons').style.display = "None";
    document.getElementById('button__test').style.display = "None";
  }
  else if (cond){
    document.getElementById('button__pay').style.display = "None";
  }
}
// if (!getCookie("uid")||temp_c==course_name){
//   document.getElementById('button__pay').style.display = "None";
// }


const roleRef=await getDoc(doc(db,"users",getCookie("uid")));
const roleSnap=roleRef.data()
const users_role=roleSnap["role"];
if (users_role!="moderator") {
  let dc =document.getElementById('button_learning_platform');
  document.getElementById('button_learning_platform').style.display = "None";
  document.getElementById('button_home_page').style.display = "None";





let theme = themes__list;
// alert(theme.name);
while (theme) {
  let course = theme.courses;
  // alert(course.name);

  while (course) {

    if (course.name == course_name) {

      sessionStorage.setItem('themeName', theme.name); // Сохранить значение в sessionStorage

      let span = document.createElement('span');
      span.textContent = course.text;
      span.className = "course__text";
      document.getElementById('main__course').append(span);
    }
    course = course.next;
  }
  theme = theme.next;
}


//document.getElementById('button__comments').textContent = "Comments";
document.getElementById('button__lessons').textContent = "Lessons";
document.getElementById('button__test').textContent = "Test";




document.getElementById('button__back').textContent = "Back";

document.querySelector('.buttons__list').onclick = function (e) {
  sessionStorage.setItem('buttonName', e.target.textContent); // Сохранить значение в sessionStorage
};
// document.querySelector('.button_pay').onclick = function (e) {
//   let temp_c=localStorage.getItem('my_courses').split(",");
//
//   let temp = [];
//   let temp_c_name = sessionStorage.getItem('courseName');
//   let z = 0;
//
//   let is_existing = "False";
//   while (z < temp_c.length) {
//     temp[z] = temp_c[z];
//     if (temp[z] == temp_c_name) {
//       is_existing = "True";
//     }
//     z = z + 1;
//   }
//   if (is_existing == "False") {
//     temp[z] = temp_c_name;
//
//   }
//   localStorage.setItem('my_courses', temp);
//
//   sessionStorage.setItem('buttonName', e.target.textContent); // Сохранить значение в sessionStorage
// };
}else{
  document.getElementById('button__lessons').textContent = "Lessons";
  document.getElementById('button__test').textContent = "Test";
  document.getElementById('button__pay').style.display = "None";
  document.getElementById('button__back').textContent = "Back";
  document.getElementById('button__back').href = "approve_courses_page.html";

  let approve_but=document.createElement('a');
  approve_but.className="button__back";
  approve_but.href="approve_page.html";
  approve_but.textContent="Approve";
  document.getElementById('buttons__list').append(approve_but);
  const roleReff=await getDoc(doc(db,"poludebil","QKj0In6Gz5EIkCVAyq3e"));
  const roleSnapp=roleReff.data()
  const themes_listt=roleSnapp["course"];
  console.log(themes_listt);

  for (let i=0;i<themes_listt.length;i+=1){
    console.log(themes_listt[i]);
    let course=themes_listt[i]["courses"];
    while (course){
      if (course_name==course.name){
        sessionStorage.setItem('themeName', themes_listt[i].name); // Сохранить значение в sessionStorage

        let span = document.createElement('span');
        span.textContent = course.text;
        span.className = "course__text";
        document.getElementById('main__course').append(span);
      }
      course=course.next;
    }
  }
  document.querySelector('.buttons__list').onclick = function (e) {
    sessionStorage.setItem('buttonName', e.target.textContent); // Сохранить значение в sessionStorage
  };
}
