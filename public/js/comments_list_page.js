// import {getCookie} from "./auth.js"
import {getCookie} from './auth.js';
import {db} from './auth.js';
import { doc , getDoc} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// document.getElementById('comment-data__header').textContent=course_name+': '+buttonName;

var allData = [];
var themes__list;
let data;
const docRef = doc(db, 'themes',
  'uGIp7HjXXSL0VKJEIamT');
  const docSnap = await getDoc(docRef);
  data = docSnap.data();
  // allData.push(data);

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
