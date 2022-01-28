//************** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geri Dönüş Amak **************/

// Temel Kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir
// 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir

let firstName="Lorem"

function greetings(firstName="",lastName="") { // default parametre alıyor
    // console.log(`Merhaba ${firstName? firstName : ""} `)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${lastName}`)
}

console.log(firstName) // değişken
greetings() // fonksiyona parametre göndermedik
greetings("Parametre")

function greetings2(firstName,lastName) {
    let info =`Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo =greetings2("ad","soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id,info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML=info
}

let htmlInfo = `<span style="color : red">Color REDDDD</span>`

domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('info',greetings2("Lorem","Ipsum"))

