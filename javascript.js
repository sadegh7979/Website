//Caps lock detect

var capsLockEnabled = null;

function getChar(e) {

  if (e.which == null) {
    return String.fromCharCode(e.keyCode); // IE
  }
  if (e.which != 0 && e.charCode != 0) {
    return String.fromCharCode(e.which); // rest
  }

  return null;
}

document.onkeydown = function(e) {
  e = e || event;

  if (e.keyCode == 20 && capsLockEnabled !== null) {
    capsLockEnabled = !capsLockEnabled;
  }
}

document.onkeypress = function(e) {
  e = e || event;

  var chr = getChar(e);
  if (!chr) return;

  if (chr.toLowerCase() == chr.toUpperCase()) {
    return;
  }

  capsLockEnabled = (chr.toLowerCase() == chr && e.shiftKey) || (chr.toUpperCase() == chr && !e.shiftKey);
}

function checkCapsWarning() {
  document.getElementById('capslock-warn').style.display = capsLockEnabled ? 'block' : 'none';
}

function removeCapsWarning() {
  document.getElementById('capslock-warn').style.display = 'none';
}

//Caps lock detect//



// searchsystem

const searchopener = document.querySelector('#searchopener');
const searchtype = document.querySelector('.searchtype');
searchopener.onclick = function(){
    searchtype.classList.toggle('active')
}

document.getElementById("searchopener").addEventListener("click", () => {
    document.getElementById("searchplace").focus(); 
    
  });

// searchsystem/



//headermenusystem

const nav_servicebtn = document.querySelector('.nav_servicebutton');
const nav_hdrmenu = document.querySelector('.nav_hdrmnu');
const servicebtn = document.getElementById('servicebtn');
const hdrmenu = document.getElementById('hdrmenu');


servicebtn.onclick = function(){
  hdrmenu.classList.toggle('active');
  servicebtn.classList.toggle('active');
}
nav_servicebtn.onclick = function(){
  nav_hdrmenu.classList.toggle('active');
  nav_servicebtn.classList.toggle('active');

}

document.addEventListener("click", function(event) {
  if (event.target.closest("#servicebtn")) return

  hdrmenu.classList.remove('active');
  nav_hdrmenu.classList.remove('active');
  servicebtn.classList.remove('active');
  nav_servicebtn.classList.remove('active');
  
});

//headermenusystem



//about us menu
const back = document.querySelector('#back');
const aboutus_minipage = document.querySelector('.aboutus_minipage');
const aboutustext = document.querySelector('.aboutustext');
const menuoverlay = document.querySelector('#overlay');
const minipage_closebtn = document.querySelector('.minipage_closebtn');
const aboutusnav_text = document.querySelector('.aboutusnav_text');

aboutustext.addEventListener("click", () => {
  aboutus_minipage.classList.toggle("active");
  back.classList.toggle("active");
  if (aboutus_minipage.classList.contains("active")) {
    document.getElementById("overlay").style.display = "block";
  }})

  minipage_closebtn.onclick = function(){
    aboutus_minipage.classList.remove("active");
    back.classList.remove("active");
    if (aboutus_minipage.classList.contains("active") == false) {
      document.getElementById("overlay").style.display = "none";
      bodyEl.classList.remove('overflowhidden');
    }}
    

  menuoverlay.addEventListener("click", () => {
    aboutus_minipage.classList.remove("active");
    back.classList.remove("active");
    if (aboutus_minipage.classList.contains("active") == false) {
      document.getElementById("overlay").style.display = "none";
    }})

  aboutusnav_text.addEventListener("click", () => {
    aboutus_minipage.classList.toggle("active");
    back.classList.toggle("active");
    if (aboutus_minipage.classList.contains("active")) {
      headernav.classList.remove("active");
    }
    
  })
  
//about us menu



//header
var header_toggler_close = document.querySelector('.header_toggler_close');
var header_toggler = document.querySelector('.header_toggler');
var headernav = document.querySelector(".headernav");
var bodyEl = document.querySelector('body');
var overlay = document.querySelector('#overlay');

header_toggler.addEventListener("click", () => {
  headernav.classList.add("active");
  if (headernav.classList.contains("active")) {
    bodyEl.classList.add('overflowhidden')
    document.getElementById("overlay").style.display = "block";
  } 
  

  
})

header_toggler_close.addEventListener("click", () => {

  headernav.classList.remove("active");
  if (headernav.classList.contains("active") == false) {
    bodyEl.classList.remove('overflowhidden')
    document.getElementById("overlay").style.display = "none";
  } 

})

overlay.onclick = function() {

  headernav.classList.remove("active");
  if (headernav.classList.contains("active") == false) {
    bodyEl.classList.remove('overflowhidden');
    document.getElementById("overlay").style.display = "none";
 
}}

//header/



// dark mode system

function Darkmode_ON() {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
}

function Lightmode_ON() {
  document.documentElement.classList.add("light");
  document.documentElement.classList.remove("dark");
}

// dark mode system //

            //signup-login system 

// password system

function showpass(){
  var showeye = document.getElementById("eye-show");
  var hideeye = document.getElementById("eye-hide");
  var passinput = document.getElementById("pass-input");
  if(passinput.type === 'password'){
    passinput.type = "text";
    showeye.style.display = "block";
    hideeye.style.display = "none";
  }
  else{
    passinput.type = "password";
    showeye.style.display = "none";
    hideeye.style.display = "block";
  }};

// password system //



