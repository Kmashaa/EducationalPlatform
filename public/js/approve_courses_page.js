import {getCookie, database, dbRef, db} from "./auth.js";
import { doc , getDoc, updateDoc,setDoc ,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

import {child, get, ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const roleRef=await getDoc(doc(db,"poludebil","QKj0In6Gz5EIkCVAyq3e"));
const roleSnap=roleRef.data()
const themes_list=roleSnap["course"];
console.log(themes_list);
