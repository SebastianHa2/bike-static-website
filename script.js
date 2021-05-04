document.addEventListener("DOMContentLoaded", autoChange)


function autoChange(){
    setInterval(() => {
        slideNum++
        if(slideNum > slides.length){
            slideNum = 1 
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-${slides.length}`).classList.add("fade-out")
            document.querySelector(`.slide-${slides.length}`).classList.remove("fade-in")
        }
        else{
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-${slideNum-1}`).classList.add("fade-out")
            document.querySelector(`.slide-${slideNum-1}`).classList.remove("fade-in")
        }
    }, 10000)
}