import {authorize, getCookie} from "./auth.js"
import {db} from "./auth.js";
import { doc , getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";


const authForm = document.getElementById('authForm');
alert(getCookie("uid"));
authForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  const users_name = document.getElementById('users_name').value;
  const roleRef=await getDoc(doc(db,"users",getCookie("uid")));
  const roleSnap=roleRef.data()
  const users_role=roleSnap["role"];
  let docRef2;
  if (users_role=="moderator") {
  docRef2=doc(db, "users", sessionStorage.getItem("user_id"));}
  else{
    docRef2=doc(db, "users", getCookie("uid"));}

  const docSnap = await getDoc(docRef2);
  let snap = docSnap.data();
  snap["name"]=users_name;
  await updateDoc(docRef2,snap);
  window.location.href="profile_page.html";

});
