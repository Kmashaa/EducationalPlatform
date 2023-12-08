import {getCookie, database, dbRef} from "./auth.js"

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

let cells_list = {
  "day": "Monday",
  "times": {
    "time": "00:00-01:00",
    "used": "False",
    "next": {
      "time": "01:00-02:00",
      "used": "False",
      "next": {
        "time": "02:00-03:00",
        "used": "False",
        "next": {
          "time": "03:00-04:00",
          "used": "True",
          "next": {
            "time": "04:00-05:00",
            "used": "False",
            "next": {
              "time": "05:00-06:00",
              "used": "False",
              "next": {
                "time": "06:00-07:00",
                "used": "False",
                "next": {
                  "time": "07:00-08:00",
                  "used": "True",
                  "next": {
                    "time": "08:00-09:00",
                    "used": "False",
                    "next": {
                      "time": "09:00-10:00",
                      "used": "False",
                      "next": {
                        "time": "10:00-11:00",
                        "used": "False",
                        "next": {
                          "time": "11:00-12:00",
                          "used": "False",
                          "next": {
                            "time": "12:00-13:00",
                            "used": "False",
                            "next": {
                              "time": "13:00-14:00",
                              "used": "False",
                              "next": {
                                "time": "14:00-15:00",
                                "used": "False",
                                "next": {
                                  "time": "15:00-16:00",
                                  "used": "False",
                                  "next": {
                                    "time": "16:00-17:00",
                                    "used": "False",
                                    "next": {
                                      "time": "17:00-18:00",
                                      "used": "False",
                                      "next": {
                                        "time": "18:00-19:00",
                                        "used": "False",
                                        "next": {
                                          "time": "19:00-20:00",
                                          "used": "False",
                                          "next": {
                                            "time": "20:00-21:00",
                                            "used": "False",
                                            "next": {
                                              "time": "21:00-22:00",
                                              "used": "False",
                                              "next": {
                                                "time": "22:00-23:00",
                                                "used": "False",
                                                "next": {
                                                  "time": "23:00-24:00",
                                                  "used": "False",
                                                  "next": null

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
  "next": {
    "day": "Tuesday",
    "times": {
      "time": "00:00-01:00",
      "used": "True",
      "next": {
        "time": "01:00-02:00",
        "used": "False",
        "next": {
          "time": "02:00-03:00",
          "used": "False",
          "next": {
            "time": "03:00-04:00",
            "used": "False",
            "next": {
              "time": "04:00-05:00",
              "used": "False",
              "next": {
                "time": "05:00-06:00",
                "used": "False",
                "next": {
                  "time": "06:00-07:00",
                  "used": "False",
                  "next": {
                    "time": "07:00-08:00",
                    "used": "False",
                    "next": {
                      "time": "08:00-09:00",
                      "used": "False",
                      "next": {
                        "time": "09:00-10:00",
                        "used": "False",
                        "next": {
                          "time": "10:00-11:00",
                          "used": "False",
                          "next": {
                            "time": "11:00-12:00",
                            "used": "False",
                            "next": {
                              "time": "12:00-13:00",
                              "used": "False",
                              "next": {
                                "time": "13:00-14:00",
                                "used": "False",
                                "next": {
                                  "time": "14:00-15:00",
                                  "used": "False",
                                  "next": {
                                    "time": "15:00-16:00",
                                    "used": "False",
                                    "next": {
                                      "time": "16:00-17:00",
                                      "used": "False",
                                      "next": {
                                        "time": "17:00-18:00",
                                        "used": "False",
                                        "next": {
                                          "time": "18:00-19:00",
                                          "used": "False",
                                          "next": {
                                            "time": "19:00-20:00",
                                            "used": "False",
                                            "next": {
                                              "time": "20:00-21:00",
                                              "used": "False",
                                              "next": {
                                                "time": "21:00-22:00",
                                                "used": "False",
                                                "next": {
                                                  "time": "22:00-23:00",
                                                  "used": "False",
                                                  "next": {
                                                    "time": "23:00-24:00",
                                                    "used": "False",
                                                    "next": null

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
    "next": {
      "day": "Wednesday",
      "times": {
        "time": "00:00-01:00",
        "used": "False",
        "next": {
          "time": "01:00-02:00",
          "used": "False",
          "next": {
            "time": "02:00-03:00",
            "used": "False",
            "next": {
              "time": "03:00-04:00",
              "used": "False",
              "next": {
                "time": "04:00-05:00",
                "used": "False",
                "next": {
                  "time": "05:00-06:00",
                  "used": "False",
                  "next": {
                    "time": "06:00-07:00",
                    "used": "False",
                    "next": {
                      "time": "07:00-08:00",
                      "used": "False",
                      "next": {
                        "time": "08:00-09:00",
                        "used": "False",
                        "next": {
                          "time": "09:00-10:00",
                          "used": "False",
                          "next": {
                            "time": "10:00-11:00",
                            "used": "False",
                            "next": {
                              "time": "11:00-12:00",
                              "used": "False",
                              "next": {
                                "time": "12:00-13:00",
                                "used": "False",
                                "next": {
                                  "time": "13:00-14:00",
                                  "used": "False",
                                  "next": {
                                    "time": "14:00-15:00",
                                    "used": "False",
                                    "next": {
                                      "time": "15:00-16:00",
                                      "used": "False",
                                      "next": {
                                        "time": "16:00-17:00",
                                        "used": "False",
                                        "next": {
                                          "time": "17:00-18:00",
                                          "used": "False",
                                          "next": {
                                            "time": "18:00-19:00",
                                            "used": "False",
                                            "next": {
                                              "time": "19:00-20:00",
                                              "used": "False",
                                              "next": {
                                                "time": "20:00-21:00",
                                                "used": "False",
                                                "next": {
                                                  "time": "21:00-22:00",
                                                  "used": "False",
                                                  "next": {
                                                    "time": "22:00-23:00",
                                                    "used": "False",
                                                    "next": {
                                                      "time": "23:00-24:00",
                                                      "used": "False",
                                                      "next": null

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
      "next": {
        "day": "Thursday",
        "times": {
          "time": "00:00-01:00",
          "used": "False",
          "next": {
            "time": "01:00-02:00",
            "used": "True",
            "next": {
              "time": "02:00-03:00",
              "used": "False",
              "next": {
                "time": "03:00-04:00",
                "used": "False",
                "next": {
                  "time": "04:00-05:00",
                  "used": "False",
                  "next": {
                    "time": "05:00-06:00",
                    "used": "False",
                    "next": {
                      "time": "06:00-07:00",
                      "used": "False",
                      "next": {
                        "time": "07:00-08:00",
                        "used": "False",
                        "next": {
                          "time": "08:00-09:00",
                          "used": "False",
                          "next": {
                            "time": "09:00-10:00",
                            "used": "False",
                            "next": {
                              "time": "10:00-11:00",
                              "used": "False",
                              "next": {
                                "time": "11:00-12:00",
                                "used": "False",
                                "next": {
                                  "time": "12:00-13:00",
                                  "used": "False",
                                  "next": {
                                    "time": "13:00-14:00",
                                    "used": "False",
                                    "next": {
                                      "time": "14:00-15:00",
                                      "used": "False",
                                      "next": {
                                        "time": "15:00-16:00",
                                        "used": "False",
                                        "next": {
                                          "time": "16:00-17:00",
                                          "used": "False",
                                          "next": {
                                            "time": "17:00-18:00",
                                            "used": "False",
                                            "next": {
                                              "time": "18:00-19:00",
                                              "used": "False",
                                              "next": {
                                                "time": "19:00-20:00",
                                                "used": "False",
                                                "next": {
                                                  "time": "20:00-21:00",
                                                  "used": "False",
                                                  "next": {
                                                    "time": "21:00-22:00",
                                                    "used": "False",
                                                    "next": {
                                                      "time": "22:00-23:00",
                                                      "used": "False",
                                                      "next": {
                                                        "time": "23:00-24:00",
                                                        "used": "False",
                                                        "next": null

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
        "next": {
          "day": "Friday",
          "times": {
            "time": "00:00-01:00",
            "used": "False",
            "next": {
              "time": "01:00-02:00",
              "used": "False",
              "next": {
                "time": "02:00-03:00",
                "used": "False",
                "next": {
                  "time": "03:00-04:00",
                  "used": "False",
                  "next": {
                    "time": "04:00-05:00",
                    "used": "False",
                    "next": {
                      "time": "05:00-06:00",
                      "used": "True",
                      "next": {
                        "time": "06:00-07:00",
                        "used": "False",
                        "next": {
                          "time": "07:00-08:00",
                          "used": "False",
                          "next": {
                            "time": "08:00-09:00",
                            "used": "False",
                            "next": {
                              "time": "09:00-10:00",
                              "used": "False",
                              "next": {
                                "time": "10:00-11:00",
                                "used": "False",
                                "next": {
                                  "time": "11:00-12:00",
                                  "used": "False",
                                  "next": {
                                    "time": "12:00-13:00",
                                    "used": "False",
                                    "next": {
                                      "time": "13:00-14:00",
                                      "used": "False",
                                      "next": {
                                        "time": "14:00-15:00",
                                        "used": "False",
                                        "next": {
                                          "time": "15:00-16:00",
                                          "used": "False",
                                          "next": {
                                            "time": "16:00-17:00",
                                            "used": "False",
                                            "next": {
                                              "time": "17:00-18:00",
                                              "used": "False",
                                              "next": {
                                                "time": "18:00-19:00",
                                                "used": "False",
                                                "next": {
                                                  "time": "19:00-20:00",
                                                  "used": "False",
                                                  "next": {
                                                    "time": "20:00-21:00",
                                                    "used": "False",
                                                    "next": {
                                                      "time": "21:00-22:00",
                                                      "used": "False",
                                                      "next": {
                                                        "time": "22:00-23:00",
                                                        "used": "False",
                                                        "next": {
                                                          "time": "23:00-24:00",
                                                          "used": "False",
                                                          "next": null

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
          "next": {
            "day": "Saturday",
            "times": {
              "time": "00:00-01:00",
              "used": "False",
              "next": {
                "time": "01:00-02:00",
                "used": "False",
                "next": {
                  "time": "02:00-03:00",
                  "used": "False",
                  "next": {
                    "time": "03:00-04:00",
                    "used": "False",
                    "next": {
                      "time": "04:00-05:00",
                      "used": "False",
                      "next": {
                        "time": "05:00-06:00",
                        "used": "False",
                        "next": {
                          "time": "06:00-07:00",
                          "used": "False",
                          "next": {
                            "time": "07:00-08:00",
                            "used": "False",
                            "next": {
                              "time": "08:00-09:00",
                              "used": "False",
                              "next": {
                                "time": "09:00-10:00",
                                "used": "False",
                                "next": {
                                  "time": "10:00-11:00",
                                  "used": "False",
                                  "next": {
                                    "time": "11:00-12:00",
                                    "used": "False",
                                    "next": {
                                      "time": "12:00-13:00",
                                      "used": "False",
                                      "next": {
                                        "time": "13:00-14:00",
                                        "used": "False",
                                        "next": {
                                          "time": "14:00-15:00",
                                          "used": "False",
                                          "next": {
                                            "time": "15:00-16:00",
                                            "used": "False",
                                            "next": {
                                              "time": "16:00-17:00",
                                              "used": "False",
                                              "next": {
                                                "time": "17:00-18:00",
                                                "used": "False",
                                                "next": {
                                                  "time": "18:00-19:00",
                                                  "used": "False",
                                                  "next": {
                                                    "time": "19:00-20:00",
                                                    "used": "False",
                                                    "next": {
                                                      "time": "20:00-21:00",
                                                      "used": "False",
                                                      "next": {
                                                        "time": "21:00-22:00",
                                                        "used": "False",
                                                        "next": {
                                                          "time": "22:00-23:00",
                                                          "used": "False",
                                                          "next": {
                                                            "time": "23:00-24:00",
                                                            "used": "False",
                                                            "next": null

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
            "next": {
              "day": "Sunday",
              "times": {
                "time": "00:00-01:00",
                "used": "False",
                "next": {
                  "time": "01:00-02:00",
                  "used": "False",
                  "next": {
                    "time": "02:00-03:00",
                    "used": "False",
                    "next": {
                      "time": "03:00-04:00",
                      "used": "False",
                      "next": {
                        "time": "04:00-05:00",
                        "used": "False",
                        "next": {
                          "time": "05:00-06:00",
                          "used": "False",
                          "next": {
                            "time": "06:00-07:00",
                            "used": "False",
                            "next": {
                              "time": "07:00-08:00",
                              "used": "False",
                              "next": {
                                "time": "08:00-09:00",
                                "used": "False",
                                "next": {
                                  "time": "09:00-10:00",
                                  "used": "False",
                                  "next": {
                                    "time": "10:00-11:00",
                                    "used": "False",
                                    "next": {
                                      "time": "11:00-12:00",
                                      "used": "False",
                                      "next": {
                                        "time": "12:00-13:00",
                                        "used": "False",
                                        "next": {
                                          "time": "13:00-14:00",
                                          "used": "False",
                                          "next": {
                                            "time": "14:00-15:00",
                                            "used": "False",
                                            "next": {
                                              "time": "15:00-16:00",
                                              "used": "False",
                                              "next": {
                                                "time": "16:00-17:00",
                                                "used": "False",
                                                "next": {
                                                  "time": "17:00-18:00",
                                                  "used": "False",
                                                  "next": {
                                                    "time": "18:00-19:00",
                                                    "used": "False",
                                                    "next": {
                                                      "time": "19:00-20:00",
                                                      "used": "False",
                                                      "next": {
                                                        "time": "20:00-21:00",
                                                        "used": "False",
                                                        "next": {
                                                          "time": "21:00-22:00",
                                                          "used": "False",
                                                          "next": {
                                                            "time": "22:00-23:00",
                                                            "used": "False",
                                                            "next": {
                                                              "time": "23:00-24:00",
                                                              "used": "False",
                                                              "next": null

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
              next: null
            }
          }
        }
      }
    }
  }
};

let cell = cells_list;
while (cell) {
  let day = cell.day;
  let th = document.createElement('th');
  th.value = day;
  th.textContent = day;
  th.text = day;
  th.className = "day_of_week";
  document.getElementById('days_list').append(th);
  cell = cell.next;

}
let counter=0;
let arr=[0,2,4];
let arr_counter=0;
let cell2=cells_list;
while(cell2) {
  let times = cell2.times;

  while (times){
    let time = times.time;
    let td=document.createElement('td');
    td.value=times.used;
    //td.textContent="ячейка";
    if (times.used=="True"){


      if (counter==arr[arr_counter]) {
        if (arr_counter <= arr[arr.length - 2]) {
          let a = document.createElement('a');
          a.textContent = "Foundations of math";
          a.href = "course_information_page.html";
          a.className="course_link";
          td.append(a);
          arr_counter=arr_counter+1;

        }

      }
      else{
        td.textContent="ячейка";

      }
      counter = counter + 1;

      td.className="used_cell"
    }
    if (times.used=="False"){
      // td.textContent="empty";

      td.className="unused_cell"
    }
    if (document.getElementById(time)) {


      document.getElementById(time).append(td);
    }

    times=times.next;
  }

  cell2=cell2.next;

}

document.getElementById('auth-data__header').textContent = getCookie("username");
let colors_courses = ["#FFB1B1", "#FFE5B1", "#BAFFE6", "#AFF5FF"];

let counter_color = 0;
let counter_course = 0;
let theme = themes__list;
//
// // let temp_c = localStorage.getItem('my_courses').split(",");
// let temp_c = localStorage.getItem('my_courses');
//
// let temp = [];
// let temp_c_name = sessionStorage.getItem('courseName');
// let i = 0;
//
// // while (i < temp_c.) {
// //   temp[i] = temp_c;
// //   // temp[i] = temp_c[i];
// //   i = i + 1;
// // }
//
// while (counter_course <= temp.length) {
//   let temp_course = temp[counter_course];
//   theme = themes__list;
//   while (theme) {
//     let course = theme.courses;
//     while (course) {
//       // let temp_course=courses[0];
//       if (course.name == temp_course) {
//         let li = document.createElement('li');
//         li.className = "courses__item1";
//
//         let div1 = document.createElement('div');
//         div1.className = "item__title";
//         let a = document.createElement('a');
//         a.textContent = course.name;
//         a.className = "item__name";
//         a.href = course.href;
//         div1.append(a);
//         li.append(div1);
//
//         let div2 = document.createElement('div');
//         div2.textContent = course.descr;
//         div2.className = "item__description";
//         li.append(div2);
//
//         let img = document.createElement('img');
//         img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
//         img.className = "item__image";
//
//         let div3 = document.createElement('div');
//         div3.textContent = parseFloat(course.num);
//         div3.className = "item__mark";
//
//         let div4 = document.createElement('div');
//         div4.className = "item__rating";
//         div4.append(img);
//         div4.append(div3);
//         li.append(div4);
//         let color = colors_courses[counter_color];
//         li.style.background = color;
//         if (counter_color == colors_courses.length - 1) {
//           counter_color = 0;
//         } else {
//           counter_color = counter_color + 1;
//         }
//
//         document.getElementById('courses-list').append(li);
//         course = course.next;
//       }
//       course = course.next;
//     }
//     theme = theme.next;
//   }
//   counter_course = counter_course + 1;
// }

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
