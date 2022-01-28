//************** Input İçerisinden Değer almak **************/

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik..
    console.log("İşlem gerceklesti")
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score',scoreInputDOM.value)
}