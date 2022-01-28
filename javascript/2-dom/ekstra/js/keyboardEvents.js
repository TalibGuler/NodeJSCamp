// KEYBOARD EVENTS

const input = document.querySelector("#txtTaskName")
const form = document.querySelector('form')
const select = document.querySelector('#select')

// input.addEventListener('keydown',eventHandler)
// input.addEventListener('keyup',eventHandler)
// input.addEventListener('keypress',eventHandler)
// input.addEventListener('focus',eventHandler)
// input.addEventListener('blur',eventHandler)
// input.addEventListener('cut',eventHandler)
// input.addEventListener('paste',eventHandler)
// input.addEventListener('select',eventHandler)
// form.addEventListener('submit',eventHandler)

select.addEventListener('change',eventHandler)

function eventHandler(event){
    console.log('event type:'+ event.type)
    // console.log('key code:'+ event.keyCode)
     console.log('value:'+ event.target.value)

    // event.target.style.backgroundColor="red"



    event.preventDefault(); // bu önemli
}