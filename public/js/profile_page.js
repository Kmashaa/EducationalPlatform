import {getCookie, database, dbRef, db} from "./auth.js";
import { doc , getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

import {child, get, ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";



let themes__list = {
  name: "Math",
  courses: {
    name: "Foundations of math",
    descr: "First step",
    times_a_week:3,
    num: 4.9,
    href: "course_information_page.html",
    next: {
      name: "Multiplication table",
      descr: "A new level of learning mathematics",
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
          num: 4.7,
          href: "course_information_page.html",
          next: {
            name: "Basic biology",
            descr: "Phytology",
            num: 4.6,
            href: "course_information_page.html",
            next: {
              name: "One more",
              descr: "Cell - the basis of the structure",
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



const docRef =  doc(db, "cells", getCookie("uid"));
const docSnap = await getDoc(docRef);
let cells = docSnap.data();

// await updateDoc(docRef,cells_empty);

let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// let cell = cells_list;
let counter=0;
while (counter<days.length) {
  let day=days[counter];
  let th = document.createElement('th');
  th.value = day;
  th.textContent = day;
  th.text = day;
  th.className = "day_of_week";
  document.getElementById('days_list').append(th);
  counter=counter+1;


}

let counter_days=0;
let counter_times=0;
let counter_cells=0;
while (counter_times<24){
  counter_days=0;
  while(counter_days<days.length){
    if (cells[days[counter_days]][counter_times]=="True"){
      counter_cells=counter_cells+1;
    }
    counter_days=counter_days+1;
  }
  counter_times=counter_times+1;

}
let difficulty=4;
let num_of_lessons_per_week=6-difficulty;
let counter_of_num=0;
let interval=parseInt(counter_cells/num_of_lessons_per_week);
let counter_of_used_cells=0;
// alert(counter_cells);
counter=0;
// let arr=[0,2,4];
// let arr_counter=0;
// let cell2=cells;
counter_days=0;
counter_times=0;
while (counter_times<24){
  counter_days=0;
  while(counter_days<days.length){
    let temp_counter=counter_times+1;
    let time = counter_times+":00-"+temp_counter+":00";
    let td=document.createElement('td');
    td.value=cells[days[counter_days]][counter_times];
    if (td.value=="True"){
      if (counter==counter_of_used_cells) {
        if(counter_of_num<num_of_lessons_per_week){
        // if (arr_counter <= arr[arr.length - 2]) {
          let a = document.createElement('a');
          a.textContent = "Foundations of math";
          a.href = "course_information_page.html";
          a.className="course_link";
          td.append(a);
          // alert(counter_of_used_cells);
          counter_of_used_cells=counter_of_used_cells+interval;
          counter_of_num=counter_of_num+1;
          // arr_counter=arr_counter+1;

      }
        else{
          td.textContent="ячейка";

        }
      }
      else{
        td.textContent="ячейка";

      }
      counter = counter + 1;

      td.className="used_cell"
  }
    if (td.value=="False"){
      // td.textContent="empty";

      td.className="unused_cell"
    }
    temp_counter=counter_times+1;
    let id=counter_times+":00-"+temp_counter+":00";
    if (document.getElementById(id)) {


      document.getElementById(id).append(td);
    }
    counter_days=counter_days+1;
  }
  counter_times=counter_times+1;

}
//
// while(cell2) {
//   let times = cell2.times;
//
//   while (times){
//     let time = times.time;
//     let td=document.createElement('td');
//     td.value=times.used;
//     //td.textContent="ячейка";
//     if (times.used=="True"){
//
//
//       if (counter==arr[arr_counter]) {
//         if (arr_counter <= arr[arr.length - 2]) {
//           let a = document.createElement('a');
//           a.textContent = "Foundations of math";
//           a.href = "course_information_page.html";
//           a.className="course_link";
//           td.append(a);
//           arr_counter=arr_counter+1;
//
//         }
//
//       }
//       else{
//         td.textContent="ячейка";
//
//       }
//       counter = counter + 1;
//
//       td.className="used_cell"
//     }
//     if (times.used=="False"){
//       // td.textContent="empty";
//
//       td.className="unused_cell"
//     }
//     if (document.getElementById(time)) {
//
//
//       document.getElementById(time).append(td);
//     }
//
//     times=times.next;
//   }
//
//   cell2=cell2.next;
//
// }

document.getElementById('auth-data__header').textContent = getCookie("username");
let colors_courses = ["#FFB1B1", "#FFE5B1", "#BAFFE6", "#AFF5FF"];

let counter_color = 0;
let counter_course = 0;
let theme = themes__list;


document.querySelector('.log_out').onclick = function (e) {
  document.cookie = "uid" + "=" + "";
  document.cookie = "username" + "=" + "";
};

// document.querySelector('.courses-list').onclick = function (e) {
//   sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
// };

document.querySelector('.schedule-table').onclick = function(e) {
  sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
};
