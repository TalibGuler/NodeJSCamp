// Event Listeners elemanlarla kullanıcılar arasındaki etkileşim

const btn = document.querySelector('#btnDeleteAll')
const btn2 = document.querySelector('#btnAddNewTask')

btn.addEventListener('click',function(e){
    let val
    val=e
    val=e.target
    val = e.target.classList
    val = e.type


    console.log(val)
    e.preventDefault()
})



// btn.addEventListener('click',btnClick)
// btn2.addEventListener('click',btnClick)

// function btnClick(){
//     console.log("btn clicked")
// }