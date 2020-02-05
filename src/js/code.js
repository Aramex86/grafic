const togleMenu = document.querySelector('.show');

const switchBtn = document.querySelectorAll('.switch');

const activate = document.querySelectorAll('.inactive');




togleMenu.addEventListener('click',function() {
    document.querySelector('.menu__wrapper').classList.toggle('showmenu');
});




