// MOUSE EVENTS

const btn = document.querySelector('#btnDeleteAll')
const ul = document.querySelector('#task-list')

// CLICK
// btn.addEventListener('click',eventHandler)
// ul.addEventListener('click',eventHandler)

// DOUBLE CLICK
// btn.addEventListener('dblclick',eventHandler)

// // MOUSE DOWN
// btn.addEventListener('mousedown',eventHandler)

// // MOUSE UP
// btn.addEventListener('mouseup',eventHandler)

// // MOUSE ENTER
// btn.addEventListener('mouseenter',eventHandler)

// // MOUSE LEAVE
// btn.addEventListener('mouseleave',eventHandler)

// // MOUSE OVER
// btn.addEventListener('mouseover',eventHandler)

// // MOUSE OUT
// btn.addEventListener('mouseout',eventHandler)

// MOUSE MOVE
const h5 = document.querySelector('h5')
btn.addEventListener('mousemove',eventHandler)

function eventHandler(event){
    console.log(`event type: ${event.type}`)
    h5.textContent=`Mouse X: ${event.offSetX} Mouse Y: ${event.offSetY}`
}