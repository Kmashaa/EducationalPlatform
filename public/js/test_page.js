// import {ref, set} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
// import {getCookie,writeUserData,readdata,database} from "./auth.js"
let course_name = sessionStorage.getItem('courseName');
let buttonName=sessionStorage.getItem('buttonName');
document.getElementById("name-test__header").textContent=course_name+": "+buttonName;


let themes__list = {
  name: "Math",
  courses:{
    name: "Foundations of math",
    descr:"First step",
    text:"First step in learning mathematics. You will learn Addition, Subtraction, Multiplication and Division",
    num:4.9,
    href:"course_information_page.html",
    lessons:{
      name:"Addition",
      text:"Addition is one of the basic operations that allows you to combine two terms. Addition notation: 8 + 3 = 11\n8 and 3 - terms\n11 - sum",
      next:{
        name:"Substraction",
        text:null,
        next:{
          name:"Multiplication",
          text:null,
          next:{
            name:"Division",
            text:null,
            next:null
          }
        }
      }
    },
    comments:{
      text:"Good!",
      mark:"4.9",
      next:{
        text:"I like it",
        mark:"4.5",
        next:{
          text:"Not bad",
          mark:"4.0",
          next:{
            text:")))",
            mark:"5.0",
            next:null
          }
        }
      }
    },
    test:{
      text:"Checking basic skills (addition, substraction, multiplication, division)",
      questions:{
        question:"1+3=?",
        answers:{
          text:"2",
          correctness:"0",
          next:{
            text:"3",
            correctness:"0",
            next:{
              text:"4",
              correctness:"1",
              next:{
                text:"5",
                correctness:"0",
                next:null
              }
            }
          }
        },
        next:{
          question:"5-2=?",
          answers:{
            text:"1",
            correctness:"0",
            next:{
              text:"2",
              correctness:"0",
              next:{
                text:"3",
                correctness:"1",
                next:{
                  text:"4",
                  correctness:"0",
                  next:null
                }
              }
            }
          },
          next:{
            question:"10*2=?",
            answers:{
              text:"10",
              correctness:"0",
              next:{
                text:"20",
                correctness:"1",
                next:{
                  text:"30",
                  correctness:"0",
                  next:{
                    text:"40",
                    correctness:"0",
                    next:null
                  }
                }
              }
            },
            next:{
              question:"45/5=?",
              answers:{
                text:"8",
                correctness:"0",
                next:{
                  text:"9",
                  correctness:"1",
                  next:{
                    text:"10",
                    correctness:"0",
                    next:{
                      text:"20",
                      correctness:"0",
                      next:null
                    }
                  }
                }
              },
              next:null,
            }
          }
        }
      }
    },
    next: {
      name: "Multiplication table",
      descr:"A new level of learning mathematics",
      text:null,
      num: 4.8,
      href: "course_information_page.html",
      lessons: null,
      comments:null,
      next: null
    }
  },
  href:"courses_list_page.html",
  next: {
    name: "English",
    href:"courses_list_page.html",
    courses:null,
    next: {
      name: "History",
      href:"courses_list_page.html",
      courses:null,
      next: {
        name: "Biology",
        courses:{
          name: "Learning biology",
          descr:"Cell - the basis of the structure",
          text:null,
          num: 4.7,
          href: "course_information_page.html",
          lessons: null,
          comments:null,
          next: {
            name: "Basic biology",
            descr:"Phytology",
            text:null,
            num: 4.6,
            href: "course_information_page.html",
            lessons: null,
            comments:null,
            next: {
              name: "One more",
              descr:"Cell - the basis of the structure",
              text:null,
              num: 4.5,
              href: "course_information_page.html",
              lessons: null,
              comments:null,
              next: null
            }
          }
        },
        href:"courses_list_page.html",
        next: {
          name: "One more",
          href:"courses_list_page.html",
          courses:null,
          next: {
            name: "One more",
            href:"courses_list_page.html",
            courses:null,
            next: {
              name: "Math",
              href:"courses_list_page.html",
              courses:null,
              next:  null
            }
          }
        }
      }
    }
  }
};
let theme=themes__list;
// while(theme){
//   set(ref(database, 'theme/'), {
//     name: theme.name
//   });
//   theme=theme.next;
// }

let counter=1;

// let theme=themes__list;
while(theme){
  let course=theme.courses;
  while (course) {
    if (course.name == course_name) {
      let test = course.test;
      while (test) {
        let question=test.questions;
        while(question) {
          let questions__item = document.createElement('li');
          questions__item.className = "questions__item";

          let item__header = document.createElement('header');
          item__header.className = "item__header";
          item__header.textContent = question.question;//"Question " + counter;

          questions__item.append(item__header);

          let main__answers = document.createElement('section');
          main__answers.className = "main__answers";

          let questions_list = document.createElement('ul');
          questions_list.className = "questions-list";

          let answer=question.answers;
          while(answer){
            let questions_list__item = document.createElement('li');
            questions_list__item.className = "questions-list__item";

            let form_check_input=document.createElement('input');
            form_check_input.className="form-check-input";
            form_check_input.type="radio";
            form_check_input.name=counter;
            form_check_input.value=answer.correctness;
            questions_list__item.append(form_check_input);

            let form_check_label=document.createElement('label');
            form_check_label.className="form-check-label";

            let t=document.createElement('t');
            t.scope="row";
            t.textContent=answer.text;
            form_check_label.append(t);
            questions_list__item.append(form_check_label);
            questions_list.append(questions_list__item);
            answer=answer.next;
          }
          main__answers.append(questions_list);
          questions__item.append(main__answers);
          // questions_list.append(questions__item);
          counter = counter + 1;
          document.getElementById('questions-list').append(questions__item);
          question=question.next;
        }
        test=test.next;
      }
    }
    course=course.next;
  }
  theme=theme.next;
}

let buttons=document.createElement('div');
buttons.className="buttons-list";

let form__submit_btn=document.createElement('button');
form__submit_btn.className="form__submit-btn";
form__submit_btn.type="submit";

let submit_btn__text=document.createElement('b');
submit_btn__text.className="submit-btn__text";
submit_btn__text.textContent="Check";
form__submit_btn.append(submit_btn__text);
document.getElementById('buttons-list').append(form__submit_btn);

let button__back=document.createElement('a');
button__back.href="test_information_page.html";
button__back.textContent="Back";
button__back.className="button__back";
document.getElementById('buttons-list').append(button__back);



document.querySelector('.form__submit-btn').onclick = function(e) {
  var corr=0;
  let j = 0;
  for (j=0;j<counter;j++)
  {
    var rad = document.getElementsByName(j);
    var x=document.getElementsByName(j).length;
    let i=0;
    for (i=0;i<x;i++){

      if (rad[i].checked && rad[i].value==1) {
        corr++;
      }
    }
  }
  sessionStorage.setItem('result', corr==(counter-1));
};
