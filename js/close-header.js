const header = document.querySelector('.header-line')
const closeBtn = document.querySelector('.button')

closeBtn.addEventListener('click',function(){
    header.classList.add('none')
})

