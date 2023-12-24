const scrollbar = document.querySelector("#scroll-bar")

window.addEventListener("DOMContentLoaded",()=>{

    window.addEventListener("scroll",()=>{
        const scrollY = window.scrollY;
        const overallHeight = document.body.scrollHeight
        const innerHeight = window.innerHeight
        const percentage = scrollY/(overallHeight-innerHeight)
        scrollbar.style.width = `${percentage*100}%`
    })


})