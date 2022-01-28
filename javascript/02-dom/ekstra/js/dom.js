//Selecting Elements

// Single Elements
// document.getElementById()
// let val;

// val = document.getElementById('header')
// val = document.getElementById('header').id
// val = document.getElementById('header').className

// val = document.getElementById('header')
// val=val.id
// val=val.className

// val.style.fontSize='45px'
// val.style.color='red'
// val.style.fontWeight='bold'
// val.style.display='none'

// document.getElementById('header').innerText="my ToDo App"

// val=document.getElementById('header').innerText="<b>my ToDo App</b>"

// document.getElementById('header').innerHTML="<b>my ToDo App</b>"

//console.log(val)

// document.querySelector()

//  console.log(document.querySelector('#header'))
//  console.log(document.querySelector('.appTitle'))
//  console.log(document.querySelector('h1'))

//  document.querySelector('li').style.color='red'
//  document.querySelector('li:last-child').style.color='blue'
//  document.querySelector('li:nth-child(2)').style.color='yellow'
// // document.querySelector('li:nth-child(3)').textContent='task item'

// document.querySelector('h1').classList('')

// Multiple Elements

// class name
// document.getElementsByClassName()

// let val
// val = document.getElementsByClassName('list-group-item')
// val = document.getElementsByClassName('list-group-item')[0]

// val = document.getElementsByClassName('list-group-item')[2]

// val = val[2]

// val[1].style.color='blue'
// val[1].style.fontSize='25px'
// val[1].textContent='new item'

// for(let i = 0; i<val.length;i++){
//     console.log(val[i].style.color='red')
//     console.log(val[i].textContent='new item')
// }


// document.getElementsByTagName()

// val = document.getElementsByTagName('li')
// val = document.getElementById('task-list').getElementsByTagName('a')

// document.querySelectorAll()

// val = document.querySelectorAll('li')

// val.forEach(function(item,index){
//     item.textContent=`${index} - hello`
// })

// val = document.querySelectorAll('li:nth-child(odd)')
// // odd tekil even çift

// val.forEach(function(item){
//     item.style.background='#ccc'
// })

// console.log(val)

