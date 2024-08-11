//login page
function myFunction() {
    document.getElementById("myForm").reset();
  }

//show menu
const navMenu = document.getElementById('nav-menu'),
   navToggle= document.getElementById('nav_toggle'),
   navClose = document.getElementById('nav_close')
function showMenu(){
if(navToggle){
  navToggle.addEventListener('click', function(){
    navMenu.classList.add('show-menu')
  })
}
}
function removeMenu(){
if(navClose){
  navClose.addEventListener('click', function(){
    navMenu.classList.remove('show-menu')
  })
}}
//remove menu
const navLink= document.querySelectorAll('.nav--link')

const linkAction = function(){
  const navMenu= document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// add shadow header
const shadowHeader= function(){
  const header = document.getElementById('header')
  this.scrollY >= 50? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

//show scroll up
const scrollUp = function(){
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

// active link
const sections = document.querySelectorAll('section[id]')
const scrollActive = function(){
  const scrollDown = window.scrollY
  sections.forEach( current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58 ,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector(' .nav__menu  a[href*= '+ sectionId +']')

    if(scrollDown > sectionTop  && scrollDown <= sectionTop + sectionHeight)
    {
      sectionsClass.classList.add('active-link')
    }
    else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll' , scrollActive);

