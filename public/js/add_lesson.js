import {db, getCookie} from "./auth.js";
import {doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
const docRef3 = doc(db,
  "poludebil",
  "QKj0In6Gz5EIkCVAyq3e");

const docSnap = await getDoc(docRef3);
const data = docSnap.data();


var counter =0;


document.getElementById('add_lesson').addEventListener('click', function(event) {
  counter+=1;
  var newListItem = document.createElement('li');

  // Create label for "Name"
  var nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Lesson name";

  newListItem.appendChild(nameLabel);
  newListItem.appendChild(document.createElement("br"));

// Create input field for "Name"
  var nameInput = document.createElement("input");
  nameInput.setAttribute("class", "form__input-field");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "true");
  newListItem.appendChild(nameInput);
  var nameLabel2 = document.createElement("label");
  nameLabel2.setAttribute("for", "text");
  nameLabel2.textContent = "Content";
  newListItem.appendChild(document.createElement("br"));

  newListItem.appendChild(nameLabel2);
  newListItem.appendChild(document.createElement("br"));

  var spanInput = document.createElement("textarea");
  spanInput.setAttribute("class", "form__input-field");
  spanInput.setAttribute("id", "text");
  spanInput.setAttribute("required", "true");
  newListItem.appendChild(spanInput);

  newListItem.appendChild(document.createElement("br"));



  // Append the new list item to the existing unordered list
  document.getElementById('lessons_list').appendChild(newListItem);
});







var new_theme1;


const addTestForm = document.getElementById('addLessonsForm');
addTestForm.addEventListener('submit',async (e) => {
  e.preventDefault();
  const list1 = document.getElementById('lessons_list');
  var currQuest;
  var jsonToSave;

  var json = {

      name: null,
      text: null,
      next: null

  };
  for (var i = 0; i < list1.children.length; i++) {
    var childNode1 = list1.children[i];
    var quest_name = childNode1.children.namedItem('name').value;
    var quest_cont = childNode1.children.namedItem('text').value;

    var questJson = {
      name: quest_name,
      text: quest_cont,
      next: null
    };
    if (i === 0) {
      json = questJson;
      currQuest = json;
    } else {
      currQuest.next = questJson;
      currQuest = currQuest.next;
    }
  }
  // await saveToDb(json);
  var jsonString = JSON.stringify(json);

  sessionStorage.setItem('lessons', jsonString);
  window.location.href='add_test.html';
});
