const box = document.querySelector('.box');
const empties = document.querySelectorAll('.empty');

box.addEventListener('dragstart', dragStart);
box.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', 'box');
    setTimeout(() => (this.style.display = 'none'), 0);
}

function dragEnd() {
    this.style.display = 'block';
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const draggedItem = document.querySelector('.box');
    this.classList.remove('hovered');
    this.appendChild(draggedItem);
}
