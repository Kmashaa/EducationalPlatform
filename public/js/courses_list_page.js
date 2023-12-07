let theme_name = sessionStorage.getItem('themeName');

let themes__list = {
  name: "Math",
  courses:{
    name: "Foundations of math",
    descr:"First step",
    num:4.9,
    href:"course_information_page.html",
    next: {
      name: "Multiplication table",
      descr:"A new level of learning mathematics",
      num: 4.8,
      href: "course_information_page.html",
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
          num: 4.7,
          href: "course_information_page.html",
          next: {
            name: "Basic biology",
            descr:"Phytology",
            num: 4.6,
            href: "course_information_page.html",
            next: {
              name: "One more",
              descr:"Cell - the basis of the structure",
              num: 4.5,
              href: "course_information_page.html",
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
    }}
};

let colors_courses=["#FFB1B1","#FFE5B1","#BAFFE6","#AFF5FF"];

let count=0;

let theme=themes__list;
while(theme){
  let course=theme.courses;

  while (course){
    if (theme.name==theme_name){
      let li=document.createElement('li');
      li.className="courses-list__item1";

      let a=document.createElement('a');
      a.className="item__name";
      a.textContent=course.name;
      a.href=course.href;
      li.append(a);

      let div=document.createElement('div');
      div.className="item__description";
      div.textContent=course.descr;
      li.append(div);

      let div1=document.createElement('div');
      div1.className="item__rating";

      let img=document.createElement('img');
      img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
      img.className="item__image";
      div1.append(img);


      let div2=document.createElement('div');
      div2.className="item__mark";
      div2.textContent=parseFloat(course.num);

      div1.append(div2);
      li.append(div1);

      let col=colors_courses[count];
      li.style.background=col;
      if (count==colors_courses.length-1){
        count=0;
      }
      else{
        count=count+1;}

      document.getElementById('courses-list').append(li);
    }
    course=course.next;
  }
  theme = theme.next;
}

document.getElementById('header__name').textContent="Course name";
document.getElementById('header__description').textContent="Description";
document.getElementById('header__rating-title').textContent="Rating";
document.getElementById('course-data__header').textContent=theme_name;

document.querySelector('.courses-list').onclick = function(e) {
  sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
};
