import {db} from "./auth.js";
import {getCookie} from './auth.js';
import { doc , getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}
const docRef =  doc(db, "bought_courses", getCookie("uid"));
const docSnap = await getDoc(docRef);

var allData = [];

let data = docSnap.data();
console.log(data);
let a=sessionStorage.getItem('courseName');
// data["course_names"].push(a);
console.log(data);
console.log(a)
// console.log(allData[0]);

// updateDoc(docRef,data);
let cond=checkAvailability(data["course_names"],a);
if (cond){
  window.alert("You have this course");
  window.location.href="course_information_page.html";

}

paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '1.00' // Set your test amount
        }
      }]
    });
  },
  onApprove: async function(data, actions) {
    return  actions.order.capture().then(async function(details) {
      let data = docSnap.data();

      let a=sessionStorage.getItem('courseName');
      let cond=checkAvailability(data["course_names"],a);
      if (!cond){
        data["course_names"].push(a);
       await updateDoc(docRef,data);
      }

      window.location.href="course_information_page.html";

    });

  },
  onError: function(err) {
    console.error('Error during payment:', err);
    alert('There was an error processing your payment. Please try again.');
  }
}).render('#paypal-button-container');


