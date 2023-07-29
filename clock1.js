function timerfunction(){
    console.log("timerfunction")
    let now = new Date();
    console.log("now",now)
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = h < 10 ? '0'+h : h;
    m = m < 10 ? '0'+m : m;
    s = s < 10 ? '0'+s : s;

    console.log("h",h)
    console.log("m",m)
    console.log("s",s)
    const str = h + ":" + m + ":" + s;
    console.log("str",str)
    const timer = document.querySelector('.timer');
    console.log("timer",timer)
    timer.innerHTML = str;
}

setInterval(timerfunction,1000)