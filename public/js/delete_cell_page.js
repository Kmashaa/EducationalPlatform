import {db, getCookie} from "./auth.js"
import { doc , getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

let cells_list={
  "day": "Monday",
  "times":{
    "time": "00:00-01:00",
    "used": "True",
    "next":{
      "time": "01:00-02:00",
      "used": "True",
      "next":{
        "time": "02:00-03:00",
        "used": "False",
        "next":{
          "time": "03:00-04:00",
          "used": "True",
          "next":{
            "time": "04:00-05:00",
            "used": "False",
            "next":{
              "time": "05:00-06:00",
              "used": "True",
              "next":{
                "time": "06:00-07:00",
                "used": "False",
                "next":{
                  "time": "07:00-08:00",
                  "used": "True",
                  "next":{
                    "time": "08:00-09:00",
                    "used": "False",
                    "next":{
                      "time": "09:00-10:00",
                      "used": "False",
                      "next":{
                        "time": "10:00-11:00",
                        "used": "False",
                        "next":{
                          "time": "11:00-12:00",
                          "used": "False",
                          "next":{
                            "time": "12:00-13:00",
                            "used": "False",
                            "next":{
                              "time": "13:00-14:00",
                              "used": "False",
                              "next":{
                                "time": "14:00-15:00",
                                "used": "False",
                                "next":{
                                  "time": "15:00-16:00",
                                  "used": "False",
                                  "next":{
                                    "time": "16:00-17:00",
                                    "used": "False",
                                    "next":{
                                      "time": "17:00-18:00",
                                      "used": "False",
                                      "next":{
                                        "time": "18:00-19:00",
                                        "used": "False",
                                        "next":{
                                          "time": "19:00-20:00",
                                          "used": "False",
                                          "next":{
                                            "time": "20:00-21:00",
                                            "used": "False",
                                            "next":{
                                              "time": "21:00-22:00",
                                              "used": "False",
                                              "next":{
                                                "time": "22:00-23:00",
                                                "used": "False",
                                                "next":{
                                                  "time": "23:00-24:00",
                                                  "used": "False",
                                                  "next":null

                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "next":null
};


const docRef2=doc(db, "cells", getCookie("uid"));
const docSnap = await getDoc(docRef2);
let cells = docSnap.data();
let counter=0;
let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
while(counter<days.length){
  let option=document.createElement('option');
  option.value=days[counter];
  option.textContent=days[counter];
  document.getElementById('day_of_week').append(option);
  counter=counter+1;
}

counter=0;
while(counter<24){
  let option=document.createElement('option');
  let temp_counter=counter+1;
  option.value=counter;
  option.textContent=counter+":00-"+temp_counter+":00";

  document.getElementById('time').append(option);
  counter=counter+1;
}

const authForm = document.getElementById('authForm');
authForm.addEventListener('submit',async (e) => {
  e.preventDefault();
  const day_of_week = document.getElementById('day_of_week').value;
  const time = document.getElementById('time').value;
  cells[day_of_week][time]="False";
  console.log(cells[day_of_week][time]);
  await updateDoc(docRef2,cells);

  window.location.href="profile_page.html";
});
