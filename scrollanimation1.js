const scrollbar = document.querySelector("#scroll-bar")

window.addEventListener("DOMContentLoaded",()=>{
    window.addEventListener("scroll",()=>{
        const scrollY = window.scrollY;
        const overallHeight = document.body.scrollHeight
        const innerHeight = window.innerHeight
        console.log(window.screenY)
        console.log(document.body.scrollHeight)
        console.log(window.innerHeight)
        console.log(document.body.scrollHeight-window.innerHeight)
        console.log(scrollY/(overallHeight-innerHeight))
        const percentage = scrollY/(overallHeight-innerHeight)
        scrollbar.style.width = `${percentage*100}%`
    })
})