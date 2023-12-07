let colors_courses=["#FFB1B1","#FFE5B1","#BAFFE6","#AFF5FF"];
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

let counter_color=0;
let counter_course=0;
let theme=themes__list;

let temp_c=localStorage.getItem('my_courses').split(",");
let temp=[];
let i=0;

while(i<temp_c.length){
  temp[i]=temp_c[i];
  i=i+1;
}
while(counter_course<=temp.length){
  let temp_course=temp[counter_course];
  theme=themes__list;
  while(theme){
    let course=theme.courses;
    while (course){
      // let temp_course=courses[0];
      if(course.name==temp_course){
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

        let col=colors_courses[counter_color];
        li.style.background=col;
        if (counter_color==colors_courses.length-1){
          counter_color=0;
        }
        else{
          counter_color=counter_color+1;}

        document.getElementById('courses-list').append(li);
      }
      course=course.next;
    }
    theme=theme.next;
  }
  counter_course=counter_course+1;
}

document.querySelector('.courses-list').onclick = function(e) {

  sessionStorage.setItem('courseName', e.target.textContent); // Сохранить значение в sessionStorage
};
