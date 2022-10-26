burger = document.querySelector('.burger');
ul = document.querySelector('ul');
nav = document.querySelector('nav');

burger.addEventlistner('click',()=>{
    ul.classList.toggle('v-resp');
    nav.classList.toggle('nav-h');

})