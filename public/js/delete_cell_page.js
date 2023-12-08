import {getCookie} from "./auth.js"
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

let cell=cells_list;
while(cell) {
  let day = cell.day;
  let option=document.createElement('option');
  option.value=day;
  option.textContent=day;
  option.text=day;
  document.getElementById('day_of_week').append(option);
  cell=cell.next;

}

let cell2=cells_list;
while(cell2) {
  let times = cell2.times;
  while (times){
    let time = times.time;
    let option=document.createElement('option');
    option.value=time;
    option.textContent=time;
    option.text=time;
    document.getElementById('time').append(option);
    times=times.next;
  }

  cell2=cell2.next;

}


const authForm = document.getElementById('authForm');
authForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const day_of_week = document.getElementById('day_of_week').value;
  const time = document.getElementById('time').value;
  // const password = document.getElementById('pass').value;
  // let cell = localStorage.getItem('new_cell');
  let temp=[];
  let i=0;

  // while(i<cells_list.length){
  //   temp[i]=cells_list[i];
  //   i=i+1;
  // }
  temp=cell;
  localStorage.setItem('new_cell',temp);
  window.location.href="profile_page.html";
});
