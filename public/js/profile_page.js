import {getCookie, database, dbRef, db} from "./auth.js";
import { doc , getDoc, updateDoc,setDoc ,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

import {child, get, ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";


alert(getCookie("uid"));
const roleRef=await getDoc(doc(db,"users",getCookie("uid")));
const roleSnap=roleRef.data()
const users_role=roleSnap["role"];
if (users_role!="moderator") {
  document.getElementById('schedule__header').textContent = "Schedule";
  let div_button1 = document.createElement('div');
  div_button1.className="log_out";

  let a_courses=document.createElement('a');
  a_courses.href="my_courses_list_page.html";
  a_courses.textContent="My courses";
  a_courses.className="button__courses";
  document.getElementById("buttons").append(a_courses);

  let a_button1=document.createElement('a');
  a_button1.href="add_cell_page.html";
  a_button1.textContent="Add cell";
  a_button1.className="button__cell";
  div_button1.append(a_button1);

  let a_button2=document.createElement('a');
  a_button2.href="delete_cell_page.html";
  a_button2.textContent="Delete cell";
  a_button2.className="button__cell";
  div_button1.append(a_button2);



  document.getElementById('buttons').append(div_button1);


  let counter_first=0;
  while(counter_first<24){
    let temp_counter=counter_first+1;
    let tr=document.createElement('tr');
    tr.id=counter_first+":00-"+temp_counter+":00";
    let th=document.createElement('th');
    th.textContent=counter_first+":00-"+temp_counter+":00";
    th.className="time";
    tr.append(th);
    document.getElementById('schedule-table').append(tr);
    counter_first=counter_first+1;

    // let option=document.createElement('option');
    // let temp_counter=counter+1;
    // option.value=counter;
    // option.textContent=counter+":00-"+temp_counter+":00";
    // document.getElementById('time').append(option);
    // counter=counter+1;
  }









  let themes__list = {
    name: "Math",
    courses: {
      name: "Foundations of math",
      descr: "First step",
      times_a_week: 3,
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

  const docRef2 = doc(db, "users", getCookie("uid"));
  const nameSnap = await getDoc(docRef2);
  let name = nameSnap.data();

  document.getElementById('auth-data__header').textContent = name["name"];

// document.getElementById('auth-data__header').textContent = getCookie("username");

  const docRef = doc(db, "cells", getCookie("uid"));
  const docSnap = await getDoc(docRef);
  let cells = docSnap.data();

// await updateDoc(docRef,cells_empty);
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let cell = cells_list;
  let counter = 0;
  while (counter < days.length) {
    let day = days[counter];
    let th = document.createElement('th');
    th.value = day;
    th.textContent = day;
    th.text = day;
    th.className = "day_of_week";
    document.getElementById('days_list').append(th);
    counter = counter + 1;


  }
  const docSnapCourse = await getDoc(doc(db, "bought_courses", getCookie("uid")));
  let courses = docSnapCourse.data();
  let course_to_show = courses["course_names"][0];
  // alert(course_to_show);
  let counter_days = 0;
  let counter_times = 0;
  let counter_cells = 0;
  while (counter_times < 24) {
    counter_days = 0;
    while (counter_days < days.length) {
      if (cells[days[counter_days]][counter_times] == "True") {
        counter_cells = counter_cells + 1;
      }
      counter_days = counter_days + 1;
    }
    counter_times = counter_times + 1;

  }
  let difficulty = 4;
  let num_of_lessons_per_week = 6 - difficulty;
  let counter_of_num = 0;
  let interval = parseInt(counter_cells / num_of_lessons_per_week);
  let counter_of_used_cells = 0;
// alert(counter_cells);
  counter = 0;
// let arr=[0,2,4];
// let arr_counter=0;
// let cell2=cells;
  counter_days = 0;
  counter_times = 0;
  while (counter_times < 24) {
    counter_days = 0;
    while (counter_days < days.length) {
      let temp_counter = counter_times + 1;
      let time = counter_times + ":00-" + temp_counter + ":00";
      let td = document.createElement('td');
      td.value = cells[days[counter_days]][counter_times];
      if (td.value == "True") {
        if (counter == counter_of_used_cells) {
          if (counter_of_num < num_of_lessons_per_week) {
            // if (arr_counter <= arr[arr.length - 2]) {
            let a = document.createElement('a');
            if (course_to_show != undefined) {
              a.textContent = course_to_show;//"Foundations of math";}
              a.href = "course_information_page.html";
            } else {
              td.textContent = "ячейка";
            }


            a.className = "course_link";
            td.append(a);
            // alert(counter_of_used_cells);
            counter_of_used_cells = counter_of_used_cells + interval;
            counter_of_num = counter_of_num + 1;
            // arr_counter=arr_counter+1;

          } else {
            td.textContent = "ячейка";

          }
        } else {
          td.textContent = "ячейка";

        }
        counter = counter + 1;

        td.className = "used_cell"
      }
      if (td.value == "False") {
        // td.textContent="empty";

        td.className = "unused_cell"
      }
      temp_counter = counter_times + 1;
      let id = counter_times + ":00-" + temp_counter + ":00";
      if (document.getElementById(id)) {


        document.getElementById(id).append(td);
      }
      counter_days = counter_days + 1;
    }
    counter_times = counter_times + 1;

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

  let colors_courses = ["#FFB1B1", "#FFE5B1", "#BAFFE6", "#AFF5FF"];

  let counter_color = 0;
  let counter_course = 0;
  let theme = themes__list;


// document.querySelector('.log_out').onclick = function (e) {
//   document.cookie = "uid" + "=" + "";
//   document.cookie = "username" + "=" + "";
// };

// document.querySelector('.courses-list').onclick = function (e) {
//   sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
// };

  document.querySelector('.schedule-table').onclick = function (e) {
    sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
   };
}
else{
  document.getElementById("button__change_name").textContent="Unapproved courses";
  document.getElementById("button__change_name").href="approve_courses_page.html";

  document.getElementById('schedule__header').textContent = "Users";
  let ul =document.createElement("ul");
  ul.className="courses-li";
  ul.id="courses-list";
  let sect = document.createElement("section");
  sect.className="main__courses";
  sect.id="main__courses";

  const collectionRef = collection(db,'users');
  // collectionRef.getDocs()
  getDocs(collectionRef)
    .then(async (querySnapshot) => {
      querySnapshot.forEach(async  (docData) => {
        const docRef =  doc(db,"users",docData.id);
        const docSnap = await getDoc(docRef);
        const roleSnap=docSnap.data();
        const users_name=roleSnap["name"];
        let li =document.createElement("li");
        li.className="courses-list__item1";
        //li.textContent=users_name;

        let div1 =document.createElement("a");
        div1.className="item__name";
        div1.textContent=roleSnap["name"];

        let div2=document.createElement("div");
        div2.className="item__description";
        div2.textContent=roleSnap["email"];


        let div3 =document.createElement("a");
        div3.className="button__change_name";
        div3.textContent="Change name";
        div3.style.marginTop="0px";
        div3.href="change_name_page.html";
        div3.id=docData.id;
        li.append(div1);
        li.append(div2);
        li.append(div3);
        ul.append(li);



        // // doc.data() is your document data
        // //alert(doc.data());
        //alert(docData.id, ' => ', docData.data());
      });
      sect.append(ul);
      document.getElementById("schedule-data__main").append(sect);
      document.querySelector('.courses-li').onclick = async function(e) {
        sessionStorage.setItem('user_id', e.target.id); // Сохранить значение в sessionStorage
        //alert(e.target.id);
      };
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });


  let vkbjnlk= "hbkjlk";

}

