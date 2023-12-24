const empties = document.querySelectorAll('.empty');
const box = document.querySelector('.img-box');

box.addEventListener('dragstart', dragStart);
box.addEventListener('dragend', dragEnd);

function dragStart(e){
    console.log('dragStart')
    e.dataTransfer.setData('text/plain', 'box');
    setTimeout(() => (this.style.display = 'none'), 0);
}

function dragEnd(){
    console.log('dragEnd')
    this.style.display = 'block';
}

function dragEnter(e){
    console.log('dragEnter');
    e.preventDefault();
    this.classList.add('hovered');
}


function dragLeave(){
    console.log('dragLeave');
    this.classList.remove('hovered');
}


function dragOver(e){
    console.log('dragOver');
    e.preventDefault();
}


function dragDrop(){
    console.log('dragDrop');
    const imgBox = document.querySelector('.img-box');
    this.classList.remove('hovered');
    this.appendChild(imgBox);
}


for (const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}