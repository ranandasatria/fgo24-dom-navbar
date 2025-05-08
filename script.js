const hamburgerButton = document.getElementById('hamburger');
const menu = document.getElementById('navMenu')

hamburgerButton.addEventListener('click', function () {
    if (menu.classList.contains('active')){
        menu.classList.remove('active')
    }else {
        menu.classList.add('active')
    }
})


document.addEventListener('click', function(event){
    const clickedOnHamburger = hamburgerButton.contains(event.target)
    const clickedInsideMenu = menu.contains(event.target)

    if (menu.classList.contains('active')&& !clickedOnHamburger && !clickedInsideMenu){
        menu.classList.remove('active')
    }
})