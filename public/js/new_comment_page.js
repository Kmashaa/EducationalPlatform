// localStorage.setItem('new_comments',["the best"]);

const authForm = document.getElementById('authForm');

authForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const comment = document.getElementById('comment').value;
  // const password = document.getElementById('pass').value;
  let comm_list=localStorage.getItem('new_comments').split(",");
  // let comm_list=localStorage.getItem('new_comments');

  let temp=[];
  let i=0;

  while(i<comm_list.length){
    temp[i]=comm_list[i];
    i=i+1;
  }
  temp[i]=comment;
  localStorage.setItem('new_comments',temp);
  window.location.href="comments_list_page.html";
  // window.alert(temp);

});

