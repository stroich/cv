import {languageResources} from "./data.js";

let lang = 'en';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const close = document.querySelector('.header-nav-close');
const span = document.querySelector('.header-nav-close-x');
const listOfLink = document.querySelectorAll('.nav-item');
const changeLanguageButton = document.querySelector('.listFooter-button');

function clickBurger(){
    burger.classList.toggle('inactive');
    menu.classList.toggle('active');
    close.classList.toggle('active');
}
burger.addEventListener('click', clickBurger);

span.addEventListener('click', clickBurger);

listOfLink.forEach(el=>{
    el.addEventListener('click', ()=>{
        if (burger.classList.contains('inactive')===true){
            clickBurger();
        }
    })
})
changeLanguageButton.addEventListener("click",(event)=>{
    const currentLanguage = event.currentTarget.innerHTML;
    lang = (currentLanguage==='en')? 'ru' : 'en';
    changeLanguageButton.innerHTML = lang;

    const menu = document.querySelectorAll('.nav-link');
    const name = document.querySelector('h1');
    const specialty = document.querySelector('h4');
    const footerText = document.querySelector('.footer-text');
    const sections = document.querySelectorAll('h2');
    const context = document.querySelectorAll('.content-item');
    const  contacts = document.querySelectorAll('.contacts-context');
    const  educationTitle = document.querySelectorAll('.education-title');
    const university = document.querySelector('.education-university');
    const courses = document.querySelectorAll('.education-item');
    const  projects = document.querySelectorAll('.project-name');
    const  languageItems = document.querySelectorAll('.languages-item');

    menu.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].menu[ind];
    })
    sections.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].menu[ind];
    })
    context.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].experience[ind];
    })
    contacts.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].contacts[ind];
    })
    educationTitle.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].educationTitle[ind];
    })
    courses.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].education.courses[ind];
    })
    projects.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].projects[ind];
    })
    languageItems.forEach((el, ind)=>{
        el.innerHTML = languageResources[lang].languages[ind];
    })
    name.innerHTML = languageResources[lang].name;
    specialty.innerHTML = languageResources[lang].specialty;
    university.innerHTML = languageResources[lang].education.university;
    footerText.innerHTML = languageResources[lang].footer;

})