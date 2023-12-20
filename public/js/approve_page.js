import {getCookie, database, dbRef, db} from "./auth.js";
import { doc , getDoc, updateDoc,setDoc ,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

import {child, get, ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const roleRef=await getDoc(doc(db,"poludebil","QKj0In6Gz5EIkCVAyq3e"));
const roleSnap=roleRef.data()
const themes_list=roleSnap["course"];
console.log(themes_list);
let course_Name=sessionStorage.getItem("courseName");
alert(course_Name)

let new_theme=0;
let element_counter=-1;
for (let i=0;i<themes_list.length;i+=1){
  console.log(themes_list[i]);
  let course=themes_list[i]["courses"];
  while (course){
    if(course_Name==course.name){
      new_theme=themes_list[i];
      element_counter=i;
    }
    course=course.next;
  }
}



const docRef=await getDoc(doc(db,"themes","courses"));
const docSnap=docRef.data()
new_theme["next"]=docSnap;
//await updateDoc(doc(db,"themes","courses"),new_theme);

console.log(themes_list);
if(element_counter>=0){
  themes_list.splice(element_counter,1);
}
console.log(themes_list);

await updateDoc(doc(db,"poludebil","QKj0In6Gz5EIkCVAyq3e"),{"course":themes_list});
window.location.href="approve_courses_page.html";
