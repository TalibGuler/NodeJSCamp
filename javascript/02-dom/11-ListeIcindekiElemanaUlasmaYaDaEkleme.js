//************** Liste İçerisindeki Son Elemana Ulaşmak ya da Eleman Eklemek **************/

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML="Son öğe değişti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="ilk öğe değişti"

let ulDOM = document.querySelector("ul#list")

let liDOM=document.createElement('li')

liDOM.innerHTML="Kendi oluşturduğum Oge"

// ulDOM.append(liDOM) // en sona ekliyor
ulDOM.prepend(liDOM) // en başa ekliyor
