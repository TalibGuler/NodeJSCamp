//************** DOM İçerisinden Yapıya Ulaşma **************/

//let title=document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML="Degisen Bilgi"
console.log(title.innerHTML)

//querySelector bir tane seçer
let link = document.querySelector("#kodluyoruzLink")
link.innerHTML="link bilgisi değişti"
link.style.color ="red"
link.classList.add('btn')