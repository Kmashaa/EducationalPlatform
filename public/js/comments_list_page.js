// import {getCookie} from "./auth.js"
import {getCookie} from './auth.js';
import {db} from './auth.js';
import { doc , getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// document.getElementById('comment-data__header').textContent=course_name+': '+buttonName;
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

let new_theme={
  name:"new_theme",
  courses:{
    name:"new_course",
    descr:"new_descr",
    text:"new_text",
    num:0,
    diff:1,
    "href":"course_information_page.html",
    lessons:{
      name:"new_lesson",
      text:"new_lesson_text",
      next:null
    },
    test: {
      text:"new_test_text",
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
    }
      }
    },
    comments:{
      text:"new_comment_text"
    },
    next:null,
  },
  "href":"courses_list_page.html",
  next:null
};

new_theme["next"]=themes__list;
var allData = [];
//var themes__list;
let data;
const docRef = doc(db, 'themes',
  'Gw3BaLwGeAAo5An8CtsM');
  const docSnap = await getDoc(docRef);
  data = docSnap.data();
  allData.push(data);
const docRef2 = doc(db, 'themes',
  'courses');
await updateDoc(docRef2,new_theme);

// Convert the array to JSON
themes__list = data;
console.log(themes__list);

let course_name = sessionStorage.getItem('courseName');
let buttonName=sessionStorage.getItem('buttonName');
document.getElementById("comment-data__header").textContent=course_name+": "+buttonName;


let colors_comments=["#FFB1B1","#FFE5B1","#BAFFE6","#AFF5FF"];
let count=0;
let theme=themes__list;
while(theme){
  let course=theme.courses;
  while (course) {
    if (course.name==course_name){
      let comment=course.comments;
      while (comment){
        let li=document.createElement('li');
        li.className='comments-list__item';

        let div=document.createElement('div');
        div.className="item__text";
        div.textContent=comment.text;
        li.append(div);

        let col=colors_comments[count];
        li.style.background=col;
        if (count==colors_comments.length-1){
          count=0;
        }
        else{
          count=count+1;}

        let item__rating=document.createElement('div');
        item__rating.className="item__rating";

        let item__image=document.createElement('img');
        item__image.className="item__image";
        item__image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
        item__rating.append(item__image);

        let item__mark=document.createElement('item__mark');
        item__mark.className="item__mark";
        item__mark.textContent=comment.mark;
        item__rating.append(item__mark);

        li.append(item__rating);
        document.getElementById('comments-list').append(li);

        comment=comment.next;
      }
    }
    course=course.next;
  }
  theme=theme.next;
}


theme=themes__list;

let temp_c=localStorage.getItem('new_comments').split(",");
let temp=[];
let i=0;

while(i<temp_c.length){
  temp[i]=temp_c[i];
  i=i+1;
}
let counter_comments=0;
while(counter_comments<temp.length){
  let li=document.createElement('li');
  li.className='comments-list__item';

  let div=document.createElement('div');
  div.className="item__text";
  div.textContent=temp[counter_comments];
  li.append(div);

  let col=colors_comments[count];
  li.style.background=col;
  if (count==colors_comments.length-1){
    count=0;
  }
  else{
    count=count+1;}

  let item__rating=document.createElement('div');
  item__rating.className="item__rating";

  let item__image=document.createElement('img');
  item__image.className="item__image";
  item__image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
  item__rating.append(item__image);

  let item__mark=document.createElement('item__mark');
  item__mark.className="item__mark";
  item__mark.textContent=4.9;
  item__rating.append(item__mark);

  li.append(item__rating);
  document.getElementById('comments-list').append(li);
  counter_comments=counter_comments+1;
}


document.getElementById('button__back').textContent="Back";
document.getElementById('button__add-comment').textContent="Add comment";
if(!getCookie("uid")) {
  document.getElementById('button__add-comment').style.display = "None";
}
