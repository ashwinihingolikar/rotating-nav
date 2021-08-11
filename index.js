const mainDiv = document.querySelector('.main-container');
const open = document.getElementById('open');
const close = document.getElementById('close');


open.addEventListener("click", ()=>{
    mainDiv.classList.add('show-nav')
})

close.addEventListener("click", ()=>{
    mainDiv.classList.remove('show-nav')
})