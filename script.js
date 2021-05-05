// BACK TO TOP BUTTON

document.addEventListener('scroll', () => {
    if(window.scrollY > 500){
        document.querySelector('.back-to-top').style.visibility = 'visible'
    }else{
        document.querySelector('.back-to-top').style.visibility = 'hidden'
    }
})

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
})


// HAMBURGER MENU

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

const navigationItems = document.querySelectorAll('.navigation-list-item')

Array.from(navigationItems).forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('show-navigation')
        hamburgerMenu.classList.remove('show-navigation')
    })
})



// ANIMATIONS 

gsap.from('.who-we-are', {duration: 1, x: '-50rem', ease: 'smooth'})
gsap.from('.why-choose-us', {duration: 1, x: '+50rem', ease: 'smooth'})
gsap.from('.navigation-list', {duration: 1, opacity: '0', ease: 'smooth'})
gsap.from('.logo', {duration: 1, opacity: '0', ease: 'smooth'})

gsap.registerPlugin(ScrollTrigger)

gsap.from('.address', {
    scrollTrigger: {
        trigger: '.address-and-hours',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    x: '-40rem',
    duration: 1
})

gsap.from('.opening-hours', {
    scrollTrigger: {
        trigger: '.address-and-hours',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    x: '+40rem',
    duration: 1
})

gsap.from('.animate-location', {
    scrollTrigger: {
        trigger: '.animate-location',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    duration: 1
})

gsap.from('.top-services-wrapper', {
    scrollTrigger: {
        trigger: '.top-services-wrapper',
        toggleActions: 'restart none none none'
    },
    x: '-100rem',
    duration: 1
})

gsap.from('.bottom-services-wrapper', {
    scrollTrigger: {
        trigger: '.bottom-services-wrapper',
        toggleActions: 'restart none none none'
    },
    x: '+100rem',
    duration: 1
})

gsap.from('.box-small-screen', {
    scrollTrigger: {
        trigger: '.box-small-screen',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    duration: 1,
    stagger: 0.5
})

gsap.from('.stockists', {
    scrollTrigger: {
        trigger: '.stockists',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    duration: 1
})

gsap.from('.stock-logos', {
    scrollTrigger: {
        trigger: '.stock-logos',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    x: '-50rem',
    duration: 1
})

gsap.from('.bike-stock', {
    scrollTrigger: {
        trigger: '.bike-stock',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    x: '+50rem',
    duration: 1
})

gsap.from('.social-media-icon', {
    scrollTrigger: {
        trigger: '.social-media',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    duration: 1,
    stagger: 0.3
})

gsap.from('.phone', {
    scrollTrigger: {
        trigger: '.phone',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    x: '-50rem',
    duration: 1
})

gsap.from('.email', {
    scrollTrigger: {
        trigger: '.email',
        toggleActions: 'restart none none none'
    },
    opacity: '0',
    x: '+50rem',
    duration: 1
})





