const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const close = document.querySelector('.header-nav-close');
const span = document.querySelector('.header-nav-close-x');
const listOfLink = document.querySelectorAll('.nav-item');

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