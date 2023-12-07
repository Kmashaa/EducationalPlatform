import {getCookie} from "./auth.js"

let course_name = sessionStorage.getItem('courseName');

let themes__list = {
  name: "Math",
  courses:{
    name: "Foundations of math",
    descr:"First step",
    text:"First step in learning mathematics. You will learn Addition, Subtraction, Multiplication and Division",
    num:4.9,
    href:"course_information_page.html",
    next: {
      name: "Multiplication table",
      descr:"A new level of learning mathematics",
      text:null,
      num: 4.8,
      href: "course_information_page.html",
      next: null
    }
  },
  href:"courses_list_page.html",
  next: {
    name: "English",
    href:"courses_list_page.html",
    courses:null,
    next: {
      name: "History",
      href:"courses_list_page.html",
      courses:null,
      next: {
        name: "Biology",
        courses:{
          name: "Learning biology",
          descr:"Cell - the basis of the structure",
          text:null,
          num: 4.7,
          href: "course_information_page.html",
          next: {
            name: "Basic biology",
            descr:"Phytology",
            text:null,
            num: 4.6,
            href: "course_information_page.html",
            next: {
              name: "One more",
              descr:"Cell - the basis of the structure",
              text:null,
              num: 4.5,
              href: "course_information_page.html",
              next: null
            }
          }
        },
        href:"courses_list_page.html",
        next: {
          name: "One more",
          href:"courses_list_page.html",
          courses:null,
          next: {
            name: "One more",
            href:"courses_list_page.html",
            courses:null,
            next: {
              name: "Math",
              href:"courses_list_page.html",
              courses:null,
              next:  null
            }
          }
        }
      }
    }
  }
};

document.getElementById('course-data__header').textContent=course_name;

let theme=themes__list;
while(theme){
  let course=theme.courses;
  while (course) {
    if (course.name==course_name){
      sessionStorage.setItem('themeName', theme.name); // Сохранить значение в sessionStorage

      let span=document.createElement('span');
      span.textContent=course.text;

      span.className="course__text";
      document.getElementById('main__course').append(span);
    }
    course=course.next;
  }
  theme=theme.next;
}


  document.getElementById('button__comments').textContent = "Comments";
  document.getElementById('button__lessons').textContent = "Lessons";
  document.getElementById('button__test').textContent = "Test";


if(!getCookie("uid")) {
  document.getElementById('button__lessons').style.display = "None";
  document.getElementById('button__test').style.display = "None";

}

document.getElementById('button__back').textContent = "Back";

document.querySelector('.buttons__list').onclick = function(e) {
  sessionStorage.setItem('buttonName', e.target.textContent); // Сохранить значение в sessionStorage
};
