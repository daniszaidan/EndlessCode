var video = document.getElementById('video');
if (video) { video.play(); }

var toggleContactForm = document.querySelector("#btnContact");
toggleContactForm.addEventListener('click', function() {
  var contactForm = document.querySelector("#contactForm");
  contactForm.classList.toggle("toggle-contact-form");
});


function toggleMenu(){
  var menu = document.getElementById('menu-list');
  menu.classList.toggle('menu-open');
}

function shrinkMenu(){
  var distanceY	= window.pageYOffset;
  var shrinkOn 	= 70;
  var nav 	= document.getElementById('nav');
  if (distanceY > shrinkOn) {
    nav.classList.add('smaller');
  } else {
    nav.classList.remove('smaller');
  }
}
window.addEventListener("scroll", shrinkMenu);


function parallax(){
  var lp = document.getElementById('landing-page');
  if (lp == null) {
    // console.log("lalala");
  }else{
    lp.style.top = + (window.pageYOffset / 2) + "px";
  }
}
window.addEventListener("scroll", parallax);

function parallax2(){
  var ha = document.getElementById('header-about');
  if (ha == null) {
    // console.log("lalala");
  }else{
    ha.style.top = + (window.pageYOffset / 2) + "px";
  }
}
window.addEventListener("scroll", parallax2);


function nextStories(){
  var ls = document.getElementById("list-stories");
  ls.style.cssText = "left: -100%;";

  var gh = document.getElementById("gradient-horizontal");
  gh.style.cssText = "opacity: 1; width: 50px";

  var gh = document.getElementById("nextStories");
  gh.style.cssText = "font-size: 1.5rem; color: #b3b3b3;";

  var gh = document.getElementById("backStories");
  gh.style.cssText = "font-size: 2.5rem; color: white;";
}
function backStories(){
  var ls = document.getElementById("list-stories");
  ls.style.cssText = "left: 0;";

  var gh = document.getElementById("gradient-horizontal");
  gh.style.cssText = "opacity: 0; width: 50px";

  var gh = document.getElementById("backStories");
  gh.style.cssText = "font-size: 1.5rem; color: #b3b3b3;";
  
  var gh = document.getElementById("nextStories");
  gh.style.cssText = "font-size: 2.5rem; color: white;";
}


// var buttonMobile = document.getElementById("button-sign-in-mobile");
// buttonMobile.onclick = function(){
// 	// var form = getElementsByClassName("left-intro");
// 	// form.style.cssText = "left: 0;";
// 	console.log("hai");
// }

function openForm(){
  var form = document.getElementById("overlay-form");
  form.style.cssText = "display: block; z-index: 60;";

  var form = document.getElementById("left-intro-mobile");
  form.style.cssText = "transition: .5s; left: 0; z-index: 100;";
}

function closeOverlayForm(){
  var form = document.getElementById("overlay-form");
  form.style.cssText = "display: none; z-index: 0;";

  var form = document.getElementById("left-intro-mobile");
  form.style.cssText = "transition: 1s; left: -100%; z-index: 2;";
}

function search(){
  var form = document.getElementById("search-input");
  form.style.cssText = "width: 200px; padding: 7px;";
  form.focus();

  // $("#form").css({
  //   "width" : "200px",
  //   "padding" : "7px"
  // });

  var form = document.getElementById("search-button");
  form.style.cssText = "width: 40px; height: 40px;";
  form.setAttribute("onclick", "defaultSearch()");
}

function defaultSearch(){
  var form = document.getElementById("search-input");
  form.style.cssText = "width: 0; padding: 0;";

  var form = document.getElementById("search-button");
  form.style.cssText = "width: 50px; height: 50px;";
  form.setAttribute("onclick", "search()");
}

function listActive(){
  var listTab = document.getElementsByClassName("list-tab");
  listTab(this)

  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
  }
}
function category(){
  var menu = document.getElementById('category-list');
  menu.classList.toggle('category-open');
}