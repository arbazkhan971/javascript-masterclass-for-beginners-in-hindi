const containerelement = document.querySelector('.container');
window.addEventListener('mouseover', (event)=>{
    console.log(event)
    console.log(event.clientX)
    console.log(event.clientY)
    containerelement.innerHTML = `
    <div class="mouse-event">
        ${event.clientX}
    <h4>
        Mouse X Position (px)
    </h4>
    </div>
    <div class="mouse-event">
        ${event.clientY}
        <h4>
            Mouse Y Position (px)
        </h4>
    </div>    
    
    `;
})    