// localStorage.setItem('my_courses',["Learning biology"]);
// localStorage.setItem('new_comments',["the best"]);




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

  let colors_themes=["rgba(255, 230, 0, 0.5)","rgba(0, 255, 10, 0.5)","rgba(0, 10, 255, 0.5)","rgba(250, 0, 255, 0.5)"];
  document.getElementById("themes-data__header").textContent="Themes";
  let tmp = themes__list;
  let counter=0;
  let count_courses=0;
  while(tmp){
    let li=document.createElement('li');
    li.className="themes-list__item";

    let a=document.createElement('a');
    a.textContent=tmp.name;
    a.className="item__name";
    a.href=tmp.href;
    li.append(a);

    let course=tmp.courses;
    while (course){
      count_courses=count_courses+1;
      course=course.next;
    }


    let div=document.createElement('div');
    div.textContent=count_courses+" courses";//tmp.num+" courses";
    div.className="item__num";
    li.append(div);
    count_courses=0;

    let col=colors_themes[counter];
    li.style.background=col;
    if (counter==colors_themes.length-1){
      counter=0;
    }
    else{
      counter=counter+1;}


    document.getElementById('themes-list').append(li);
    tmp = tmp.next;
  }
// }


  let colors_courses=["rgba(0, 102, 255, 0.5)","rgba(0, 255, 209, 0.5)","rgba(255, 199, 0, 0.5)","rgba(255, 0, 0, 0.5)"];
  document.getElementById("courses-data__header").textContent="Top rated";
  let counter_color=0;
  let tmpp=themes__list;
  while (tmpp){
    let course=tmpp.courses;

    while (course){
      let li=document.createElement('li');
      li.className="courses-list__item";

      let div1 =document.createElement('div');
      div1.className="item__title";
      let a=document.createElement('a');
      a.textContent=course.name;
      a.className="item__name";
      a.href=course.href;
      div1.append(a);
      li.append(div1);

      let div2=document.createElement('div');
      div2.textContent=course.descr;
      div2.className="item__course-description";
      li.append(div2);

      let img=document.createElement('img');
      img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
      img.className="item__image";

      let div3=document.createElement('div');
      div3.textContent=parseFloat(course.num);
      div3.className="item__mark";

      let div4=document.createElement('div');
      div4.className="item__rating";
      div4.append(img);
      div4.append(div3);
      li.append(div4);

      let color=colors_courses[counter_color];
      li.style.background=color;
      if (counter_color==colors_courses.length-1){
        counter_color=0;
      }
      else{
        counter_color=counter_color+1;}

      document.getElementById('courses-list').append(li);
      course=course.next;
    }
    tmpp=tmpp.next;
  }


document.querySelector('.themes-list').onclick = function(e) {
  sessionStorage.setItem('themeName', e.target.textContent); // Сохранить значение в sessionStorage
};
document.querySelector('.courses-list').onclick = function(e) {
  sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
};


