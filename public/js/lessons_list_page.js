let course_name = sessionStorage.getItem('courseName');
let buttonName=sessionStorage.getItem('buttonName');
document.getElementById("lesson-data__header").textContent=course_name+": "+buttonName;

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
      text:"Addition is one of the basic operations that allows you to combine two terms. Addition notation: 8 + 3 = 11\n" +
        "8 and 3 - terms\n" +
        "11 - sum",
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
    next: {
      name: "Multiplication table",
      descr:"A new level of learning mathematics",
      text:null,
      num: 4.8,
      href: "course_information_page.html",
      lessons: null,
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
          next: {
            name: "Basic biology",
            descr:"Phytology",
            text:null,
            num: 4.6,
            href: "course_information_page.html",
            lessons: null,
            next: {
              name: "One more",
              descr:"Cell - the basis of the structure",
              text:null,
              num: 4.5,
              href: "course_information_page.html",
              lessons: null,
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

let colors_lessons=["#FFB1B1","#FFE5B1","#BAFFE6","#AFF5FF"];
let count=0;
let theme=themes__list;
while(theme){
  let course=theme.courses;
  while (course) {
    if (course.name==course_name){
      let lesson=course.lessons;
      while (lesson){
        let li=document.createElement('li');
        li.className='lessons-list__item';

        let a=document.createElement('a');
        a.href="lesson_page.html";
        a.className="item__name";
        a.textContent=lesson.name;
        li.append(a);
        let col=colors_lessons[count];
        li.style.background=col;
        if (count==colors_lessons.length-1){
          count=0;
        }
        else{
          count=count+1;}

        document.getElementById('lessons-list').append(li);
        lesson=lesson.next;
      }
    }
    course=course.next;
  }
  theme=theme.next;
}
document.getElementById('button__back').textContent="Back";

document.querySelector('.lessons-list').onclick = function(e) {
  sessionStorage.setItem('lessonName', e.target.textContent); // Сохранить значение в sessionStorage
};
