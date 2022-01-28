// Event Bubbling

const form = document.querySelector('form')
const cardBody = document.querySelector('.card-body')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

// form.addEventListener('click',function(event){
//     console.log("form")
//     event.stopPropagation()
// })

// cardBody.addEventListener('click',function(event){
//     console.log("card body")
//     event.stopPropagation()
// })

// card.addEventListener('click',function(event){
//     console.log("card")
//     event.stopPropagation()
// })

// container.addEventListener('click',function(event){
//     console.log("container")
//     event.stopPropagation()
// })

// EVENT CAPTURING

// form.addEventListener('click',function(event){
//     console.log("form")
//     event.stopPropagation()
// },true)

// cardBody.addEventListener('click',function(event){
//     console.log("card body")
//     event.stopPropagation()
// },true)

// card.addEventListener('click',function(event){
//     console.log("card")
//     event.stopPropagation()
// },true)

// container.addEventListener('click',function(event){
//     console.log("container")
//     event.stopPropagation()
// },true)

// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// });

const ul = document.querySelector('ul')

ul.addEventListener('click',function(e){
    if (e.target.className==='fas fa-times') {
        e.target.parentElement.parentElement.remove()
        e.preventDefault()

    }
})
