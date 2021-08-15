let bar = document.querySelector('.is-active')
let bar_close = document.querySelector('.is-close')
let menu = document.querySelector('.menu')

bar.addEventListener('click', function() {
    menu.classList.toggle('active')
    bar.classList.toggle('hd')
    bar_close.style.display = 'block';
})
bar_close.addEventListener('click', function() {
    menu.classList.remove('active')
    bar.classList.remove('hd')
    bar_close.style.display = 'none';

})