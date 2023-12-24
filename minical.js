const day = document.querySelector(".day")
const year = document.querySelector(".year")
const date = document.querySelector(".date")
const month = document.querySelector(".month")

window.addEventListener("DOMContentLoaded",()=>{

    const dd = new Date();
    console.log(dd)

    date.innerHTML = dd.getDate();
    year.innerHTML = dd.getFullYear()
    month.innerHTML = dd.toLocaleDateString("en-US",{month:"long"})
    day.innerHTML = dd.toLocaleDateString("en-US",{weekday:"long"})
    console.log(dd.toLocaleDateString("en-US",{month:"long"}))
})