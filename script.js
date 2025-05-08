const hamburgerButton = document.getElementById('hamburger');
const menu = document.getElementById('navMenu')

hamburgerButton.addEventListener('click', function () {
    if (menu.classList.contains('active')){
        menu.classList.remove('active')
    }else {
        menu.classList.add('active')
    }
})


