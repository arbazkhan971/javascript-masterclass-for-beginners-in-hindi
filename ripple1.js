const btn = document.querySelector(".button")

btn.addEventListener("click",(event)=>{
    console.log(event,"event")
    const rect = btn.getBoundingClientRect()
    const width = rect.width;
    const left = rect.left;
    const top = rect.top;
    const span = document.createElement("span")
    span.className = "ripple"
    span.style.width = span.style.height = `${width}px`
    span.style.left = `${event.clientX - left - width/2}px`
    span.style.top = `${event.clientY - top - width/2}px`
    btn.appendChild(
        span
    )

})