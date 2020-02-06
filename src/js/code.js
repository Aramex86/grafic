$(document).ready(function() {
    $('.progres__bar').mouseenter(function(){
        $(this).siblings().css('opacity',1);
    });
    $('.progres__bar').mouseleave(function(){
        $(this).siblings('.label').css('opacity',0);
    });
});




const togleMenu = document.querySelector('.show');
const switchBtn = document.querySelectorAll('.switch input');
const activate = document.querySelectorAll('.inactive');
const label = document.querySelectorAll('.label');
const progresBar = document.querySelectorAll('.progres__bar');
const text = `Active <br> <span>Rank:10/30</span>`


//MOBILE MENU 
togleMenu.addEventListener('click', function () {
    document.querySelector('.menu__wrapper').classList.toggle('showmenu');
});


//Swicth btn
const switchSelect = () => {
    for (let i = 0; i < switchBtn.length; i++) {
        switchBtn[i].addEventListener('click', function () {
            if (switchBtn[i].checked) {
                activate[i].classList.add('active');
                activate[i].innerHTML = text;
            } else {
                activate[i].classList.remove('active');
                activate[i].innerHTML = "Inactive";
            }
        });
    }
}


//Progress bar Label conver in number

const showLabel = () => {
    for (let i = 0; i < label.length; i++) {
        const percent = document.querySelectorAll('.percent');
        const percentText = percent[i].innerText;
        const number = parseInt(percentText);

        const removePercent = 1000 * number / 100;

        label[i].innerText = removePercent;

        if(removePercent === 0){
            label[i].style.display = "none";
        }
    }
}

//Checkbox select

const checkBoxSelect = () =>{
    const checkbox = document.querySelector('.checkbox__container--head input');
    const allCheckBox = document.querySelectorAll('.checkbox__container input');

    checkbox.addEventListener('click',function () {
        if(checkbox.checked){
            for(let i = 0;i<allCheckBox.length;i++){
                allCheckBox[i].checked = true;
            }
            }else{
                for(let i = 0;i<allCheckBox.length;i++){
                    allCheckBox[i].checked = false;
                }
        }
    });
    

    
}






switchSelect();
showLabel();
checkBoxSelect();



