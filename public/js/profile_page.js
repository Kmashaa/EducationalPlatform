import {getCookie,database,dbRef} from "./auth.js"
import {child, get, ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
let themes__list = {
  name: "Math",
  courses:{
    name: "Foundations of math",
    descr:"First step",
    num:4.9,
    href:"course_information_page.html",
    next: {
      name: "Multiplication table",
      descr:"A new level of learning mathematics",
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
          num: 4.7,
          href: "course_information_page.html",
          next: {
            name: "Basic biology",
            descr:"Phytology",
            num: 4.6,
            href: "course_information_page.html",
            next: {
              name: "One more",
              descr:"Cell - the basis of the structure",
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
    }}
};

document.getElementById('auth-data__header').textContent=getCookie("username");
let colors_courses=["#FFB1B1","#FFE5B1","#BAFFE6","#AFF5FF"];

let counter_color=0;
let counter_course=0;
let theme=themes__list;

let temp_c=localStorage.getItem('my_courses').split(",");
let temp=[];
let temp_c_name=sessionStorage.getItem('courseName');
let i=0;

while(i<temp_c.length){
  temp[i]=temp_c[i];
  i=i+1;
}

while(counter_course<=temp.length){
  let temp_course=temp[counter_course];
  theme=themes__list;
  while(theme){
  let course=theme.courses;
  while (course){
    // let temp_course=courses[0];
    if(course.name==temp_course){
      let li=document.createElement('li');
      li.className="courses__item1";

      let div1 =document.createElement('div');
      div1.className="item__title";
      let a=document.createElement('a');
      a.textContent=course.name;
      a.className="item__name";
      a.href=course.href;
      div1.append(a);
      li.append(div1);

      let div2=document.createElement('div');
      div2.textContent=course.descr;
      div2.className="item__description";
      li.append(div2);

      let img=document.createElement('img');
      img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
      img.className="item__image";

      let div3=document.createElement('div');
      div3.textContent=parseFloat(course.num);
      div3.className="item__mark";

      let div4=document.createElement('div');
      div4.className="item__rating";
      div4.append(img);
      div4.append(div3);
      li.append(div4);
      let color=colors_courses[counter_color];
      li.style.background=color;
      if (counter_color==colors_courses.length-1){
        counter_color=0;
      }
      else{
        counter_color=counter_color+1;}

      document.getElementById('courses-list').append(li);
      course=course.next;
    }
    course=course.next;
  }
  theme=theme.next;
  }
  counter_course=counter_course+1;
}

document.querySelector('.log_out').onclick = function(e) {
  document.cookie = "uid" + "=" + "";
  document.cookie="username"+"="+"";
};

document.querySelector('.courses-list').onclick = function(e) {
  sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
};
