import {db, getCookie} from "./auth.js";
import {doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
const docRef3 = doc(db,
  "poludebil",
  "QKj0In6Gz5EIkCVAyq3e");

const docSnap = await getDoc(docRef3);
const data = docSnap.data();

document.getElementById('add_answer').addEventListener('click', function(event) {
  // Create a new list item
  var newListItem = document.createElement('li');

// Create label for "Answer"
  var answerLabel = document.createElement('label');
  answerLabel.setAttribute('for', 'answer');
  answerLabel.textContent = 'Answer';
  newListItem.appendChild(answerLabel);
  newListItem.appendChild(document.createElement('br'));

// Create input field for "Answer"
  var answerInput = document.createElement('input');
  answerInput.setAttribute('class', 'form__input-field');
  answerInput.setAttribute('name', 'answer');
  answerInput.setAttribute('type', 'text');
  answerInput.setAttribute('required', 'true');
  newListItem.appendChild(answerInput);
  newListItem.appendChild(document.createElement('br'));

// Create label for "Is correct"
  var correctLabel = document.createElement('label');
  correctLabel.setAttribute('for', 'correct');
  correctLabel.textContent = 'Is correct';
  newListItem.appendChild(correctLabel);
  newListItem.appendChild(document.createElement('br'));

  let sel = document.querySelectorAll('#answers_list');
  let len =sel.length-1;

// Create input field for "Is correct" (radio button)
  var radioInput = document.createElement('input');
  radioInput.setAttribute('class', 'form__input-field');
  radioInput.setAttribute('name', 'radio'+len);
  radioInput.setAttribute('type', 'radio');
  radioInput.setAttribute('required', 'true');
  newListItem.appendChild(radioInput);
  newListItem.appendChild(document.createElement('br'));

// Append the new list item to a parent element, e.g., a ul with id "answers_list"
/*
  var answersList = document.getElementById('answers_list');
*/
/*
  answersList.appendChild(newListItem);
*/

  // Append the new list item to the existing unordered list
  sel[len].appendChild(newListItem);
});



var counter =0;


document.getElementById('add_question').addEventListener('click', function(event) {
  counter+=1;
  var newListItem = document.createElement('li');

  // Create label for "Name"
  var nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "question");
  nameLabel.textContent = "Name";
  document.body.appendChild(nameLabel);
  document.body.appendChild(document.createElement("br"));

  newListItem.appendChild(nameLabel);

// Create input field for "Name"
  var nameInput = document.createElement("input");
  nameInput.setAttribute("class", "form__input-field");
  nameInput.setAttribute("name", "question");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "true");
  document.body.appendChild(nameInput);
  document.body.appendChild(document.createElement("br"));
  newListItem.appendChild(nameInput);


// Create ul element for the answers list
  var answersList = document.createElement("ul");
  answersList.setAttribute("id", "answers_list");
  answersList.setAttribute("num", counter.toString());

  document.body.appendChild(answersList);

// Create li element for an answer
  var answerItem = document.createElement("li");


// Create label for "Answer"
  var answerLabel = document.createElement("label");
  answerLabel.setAttribute("for", "correct");
  answerLabel.textContent = "Answer";
  answerItem.appendChild(answerLabel);
  answerItem.appendChild(document.createElement("br"));

// Create input field for "Answer"
  var answerInput = document.createElement("input");
  answerInput.setAttribute("class", "form__input-field");
  answerInput.setAttribute('name',"answer");
  answerInput.setAttribute("type", "text");
  answerInput.setAttribute("required", "true");
  answerItem.appendChild(answerInput);
  answerItem.appendChild(document.createElement("br"));

// Create label for "Is correct"
  var correctLabel = document.createElement("label");
  correctLabel.setAttribute("for", "correct");
  correctLabel.textContent = "Is correct";
  answerItem.appendChild(correctLabel);
  answerItem.appendChild(document.createElement("br"));

// Create input field for "Is correct" (radio button)
  var radioInput = document.createElement("input");
  radioInput.setAttribute("class", "form__input-field");
  radioInput.setAttribute("name", "radio"+counter);
  radioInput.setAttribute("type", "radio");
  radioInput.setAttribute("required", "true");
  answerItem.appendChild(radioInput);
  answerItem.appendChild(document.createElement("br"));

// Append the answer item to the answers list
  answersList.appendChild(answerItem);
  newListItem.appendChild(answersList);


  // Append the new list item to the existing unordered list
  document.getElementById('questions_list').appendChild(newListItem);
});







var new_theme1;


const addTestForm = document.getElementById('addQuestionsForm');
addTestForm.addEventListener('submit',async (e) => {
  e.preventDefault();
  const list1 = document.getElementById('questions_list');
  var currQuest; var jsonToSave;

  var json;
  for (var i = 0; i < list1.children.length; i++) {
    var childNode1 = list1.children[i];
    var quest_name = childNode1.children.namedItem('question').value;

    var questJson = {
      question: quest_name,
      answers: null,
      next: null
    };
    let sel = document.querySelectorAll('#answers_list');
    const list = sel[i];
    var currAnswer = questJson.answers;
    for (var j = 0; j < list.children.length; j++) {
      var childNode = list.children[j];
      var answerText = childNode.children.namedItem('answer')['value'];
      let name = 'radio'+i;
      console.log(name);
      console.log(childNode.children.namedItem(name));
      var answerRadio = childNode.children.namedItem(name)['value'];
      if(answerRadio ==="on"){
        answerRadio = "1";
      }
      var answerJson = {
        text: answerText,
        correctness: answerRadio,
        next: null,
      }
      if (j === 0) {
        questJson.answers = answerJson;
        currAnswer = questJson.answers;
      } else {
        currAnswer.next = answerJson;
        currAnswer = currAnswer.next;
      }
    }
    if (i === 0) {
      json = questJson;
      currQuest = json;
    } else {
      currQuest.next = questJson;
      currQuest = currQuest.next;
    }
  }
  // await saveToDb(json);

 // async function saveToDb(questJson) {
  const course_name = sessionStorage.getItem('course_name');
  const theme = sessionStorage.getItem('theme');
  const test_name = sessionStorage.getItem('test_name');
  const diff = sessionStorage.getItem('diff');
  const descr = sessionStorage.getItem('description');
  let new_theme= {
        name:theme,
        courses: {
          next:null,
          is_approved: false,
          name: course_name,
          descr: descr,
          text: descr,
          num: 0,
          diff: diff,

          href: "course_information_page.html",
          lessons: {
            name: "new_lesson",
            text: "new_lesson_text",
            next: null
          },
          test: {
            text: test_name,
            questions: json,
          },
          comments: {
            text: "new_comment_text"
          },
        },
    href: "courses_list_page.html",
    next: null
};

/*  const docRef3 = doc(db,
    "poludebil",
    "QKj0In6Gz5EIkCVAyq3e");

   const docSnap = await getDoc(docRef3);
   const data = docSnap.data();
   data["course"].push(new_theme);
   await updateDoc(docRef3,data);
// }*/
  data["course"].push(new_theme);
  await updateDoc(docRef3, data);
window.location.href='index.html';});

