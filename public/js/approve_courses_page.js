import {getCookie, database, dbRef, db} from "./auth.js";
import { doc , getDoc, updateDoc,setDoc ,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

import {child, get, ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const roleRef=await getDoc(doc(db,"poludebil","QKj0In6Gz5EIkCVAyq3e"));
const roleSnap=roleRef.data()
const themes_list=roleSnap["course"];
console.log(themes_list);

for (let i=0;i<themes_list.length;i+=1){
  console.log(themes_list[i]);
  let course=themes_list[i]["courses"];
  while (course){

      let li=document.createElement('li');
      li.className="courses-list__item1";

      let a=document.createElement('a');
      a.className="item__name";
      a.textContent=course.name;
      a.href=course.href;
      li.append(a);

      let div=document.createElement('div');
      div.className="item__description";
      div.textContent=course.descr;
      li.append(div);

      // let div1=document.createElement('div');
      // div1.className="item__rating";
      //
      // let img=document.createElement('img');
      // img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
      // img.className="item__image";
      // div1.append(img);


      // let div2=document.createElement('div');
      // div2.className="item__mark";
      // div2.textContent=parseFloat(course.num);

      // div1.append(div2);
      // li.append(div1);

      //let col=colors_courses[count];
      //li.style.background=col;
      // if (count==colors_courses.length-1){
      //   count=0;
      // }
      // else{
      //   count=count+1;}

      document.getElementById('courses-list').append(li);
    course=course.next;
    }


}
document.querySelector('.courses-list').onclick = function(e) {
  sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
};
//document.getElementById('buttons__list').append(approve_but);
// const roleReff=await getDoc(doc(db,"poludebil","QKj0In6Gz5EIkCVAyq3e"));
// const roleSnapp=roleReff.data()
// const themes_listt=roleSnapp["course"];
// console.log(themes_listt);
// let course_to_approve=0;
// for (let i=0;i<themes_listt.length;i+=1) {
//   console.log(themes_listt[i]);
//   let course = themes_listt[i]["courses"];
//   while (course) {
//     if (course_name == course.name) {
//       course_to_approve = course;
//       delete themes_listt[i];
//     }
//     course = course.next;
//   }
// }
