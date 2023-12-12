import {getCookie} from "./auth.js"


if(getCookie("uid")){
  let button__profile=document.createElement('a');
  button__profile.className="button__profile";
  button__profile.textContent="Profile";
  button__profile.href="profile_page.html";
  document.getElementById('buttons_profile').append(button__profile);

  let button__logout=document.createElement('a');
  button__logout.className="button_sign_up";
  button__logout.textContent="Log out";
  button__logout.href="home_page.html";
  document.getElementById('buttons_sign').append(button__logout);
  // document.getElementById('buttons_sign').style.width="50%";
  // document.getElementById('buttons_profile').style.width="0px";




}else{
  let button_sign_in = document.createElement('a');
  button_sign_in.className="button_sign_in";
  button_sign_in.textContent="Sign in";
  button_sign_in.href="sign_in_page.html";
  document.getElementById('buttons_sign').append(button_sign_in);

  let button_sign_up = document.createElement('a');
  button_sign_up.className="button_sign_up";
  button_sign_up.textContent="Sign up";
  button_sign_up.href="sign_up_page.html";
  document.getElementById('buttons_sign').append(button_sign_up);
  document.getElementById('buttons_sign').style.width="50%";
  document.getElementById('buttons_profile').style.width="0px";
};


document.querySelector('.buttons_sign').onclick = function(e) {
  document.cookie = "uid" + "=" + "";
  document.cookie="username"+"="+"";
};

