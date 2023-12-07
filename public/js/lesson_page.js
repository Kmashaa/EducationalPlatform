let lesson_name=sessionStorage.getItem('lessonName');
let course_name=sessionStorage.getItem('courseName');
document.getElementById('lesson-data__header').textContent=lesson_name;

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
      text:"Addition is one of the basic operations that allows you to combine two terms. Addition notation: 8 + 3 = 11. 8 and 3 - terms. 11 - sum",
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
while(theme){
  let course=theme.courses;
  while (course) {
    if (course.name==course_name){
      let lesson=course.lessons;
      while (lesson){
        if (lesson.name==lesson_name){
          let text=document.createElement('span');
          text.className="lesson__text";
          text.textContent=lesson.text;
          document.getElementById('main__lesson').append(text);
        }
        lesson=lesson.next;
      }
    }
    course=course.next;
  }
  theme=theme.next;
}

document.getElementById('button__back').textContent="Back";

