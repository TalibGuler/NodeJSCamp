const taskList = document.querySelector('#task-list')

// REMOVING ELEMENT
// taskList.remove()
// taskList.childNodes[7].remove()
// taskList.children[3].remove()

//taskList.removeChild(taskList.removeChild[3]) // ulastıgın listenin alt elamanlarını silme



// REMOVING ATTRIBUTE
//taskList.children[0].removeAttribute('class')

// for (let i = 0; i < taskList.children.length; i++) {
//    taskList.children[i].removeAttribute('class')
// }



// REPLACING ELEMENTS
const cardHeader = document.querySelector('.card-header')

// CREATE ELEMENT
const h2 = document.createElement('h2')
h2.setAttribute('class','card-header')
h2.appendChild(document.createTextNode('My List'))

const parent = document.querySelector('.card')
parent.replaceChild(h2,cardHeader)

// console.log(cardHeader)

// CLASSES
let val
link = taskList.children[0].children[0]

// val = link.className
// val = link.classList
// val = link.classList[0]
// val = link.classList[1]

link.classList.add('new')
link.classList.remove('new')



// ATTRIBUTES
val = link.getAttribute('data-id')
val = link.getAttribute('href')
val = link.setAttribute('href','sadıkturan.com')
val=link.hasAttribute('href')

console.log(val)