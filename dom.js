const anotherh1tag = document.createElement('h1');
anotherh1tag.textContent = 'I am a new h1 tag';
console.log(anotherh1tag);

document.body.appendChild(anotherh1tag);
console.log("document.body", document.body.innerHTML);

const addptag = document.createElement('p');
addptag.textContent = 'I am a new p tag';
console.log(addptag);
document.body.appendChild(addptag);

const adda = document.createElement('a');
adda.textContent = 'I am a new a tag';
adda.href = 'https://www.google.com';
console.log(adda);
document.body.appendChild(adda);

const addimg = document.createElement('img');
addimg.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
console.log(addimg);
document.body.appendChild(addimg);

const addul = document.createElement('ul');
const addli1 = document.createElement('li');
const addli2 = document.createElement('li');
const addli3 = document.createElement('li');

addli1.textContent = 'one';
addli2.textContent = 'two';
addli3.textContent = 'three';

addul.appendChild(addli1);
addul.appendChild(addli2);
addul.appendChild(addli3);

document.body.appendChild(addul);
const addanotherp = document.createElement('p');
addanotherp.textContent = 'I am another p tag';
addanotherp.style.color = 'red';
addanotherp.style.fontSize = '50px';
addanotherp.style.fontFamily = 'sans-serif';
addanotherp.style.fontWeight = 'bold';
addanotherp.id = 'newptag';
addanotherp.className = 'newpclass';
console.log(addanotherp);
document.body.appendChild(addanotherp);