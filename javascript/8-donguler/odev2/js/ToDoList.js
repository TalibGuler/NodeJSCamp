const task =document.querySelector('#task')
let btnEkle = document.querySelector("#liveToastBtn")

const ulDOM = document.querySelector("#list")
const liDOM=document.createElement('li')


    
btnEkle.addEventListener('click',newElement)
ulDOM.addEventListener('click',deleteItem)
liDOM.addEventListener('click',complateItem)
liDOM.addEventListener('dblclick',complateDblItem)


function deleteItem(event){

    if (event.target.clas) {
        
    }
   
    event.preventDefault()
}

function complateItem(){
    if (liDom.classList==="checked") {
        liDOM.classList.remove('checked')
    }
    else{
        liDOM.classList.add('checked')

    }
}

function complateDblItem(){
    
}

function newElement(event){
    if(task.value ===''){
        alert("Boş Ekleme Yapılamaz")
    }
    
    liDOM.innerText=task.value
    ulDOM.append(liDOM)
   
    event.preventDefault()
}