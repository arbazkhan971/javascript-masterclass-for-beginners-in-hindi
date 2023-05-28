console.log('dom.js')
// get element by id
console.log(document)
const h1dom = document.getElementById('dom')
console.log(h1dom)
console.log(h1dom.textContent)
console.log('------------------')

const domid1 = document.getElementById('domid1')
console.log(domid1)
console.log(domid1.textContent)
// get element by class
const class1 = document.getElementsByClassName('dom1class')
console.log(class1)
console.log(typeof class1)
console.log(class1)
// console.log("class1",class1.textContent)

const classdom2 = document.getElementsByClassName('dom2')[0]
console.log(classdom2)
console.log(classdom2.textContent)
// get element by tag
const tag1 = document.getElementsByTagName('p')[3]
console.log(tag1.textContent)

// get element by selector
const selector1 = document.querySelector('#dom')
console.log("forid",selector1.textContent)
const selector2 = document.querySelector('.dom1class')
console.log("forid",selector2.textContent)
const selector3 = document.querySelector('p')
console.log("p",selector3.textContent)

// get element by selector all
const selectorall1 = document.querySelectorAll('#dom')
console.log("forid",selectorall1)
const selectorall2 = document.querySelectorAll('.dom1class')
console.log("forid",selectorall2)
const selectorall3 = document.querySelectorAll('p')
console.log("p",selectorall3)

// get element by attribute
// get element by attribute value
// get element by attribute name
// get element by attribute name and value
// get element by attribute name and value and tag
// get element by attribute name and value and tag and class