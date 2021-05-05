const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerMenuLines = document.querySelectorAll('.line')

hamburgerMenu.addEventListener('click', () => {
    if(!hamburgerMenu.classList.contains('show-navigation')){
        document.querySelector('nav').classList.add('show-navigation')
        hamburgerMenu.classList.add('show-navigation')
    }else{
        document.querySelector('nav').classList.remove('show-navigation')
        hamburgerMenu.classList.remove('show-navigation')
    }
})