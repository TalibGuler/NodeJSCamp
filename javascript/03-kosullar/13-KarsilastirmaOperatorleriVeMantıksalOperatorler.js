//************** Karşılaştırma Operatörleri ve Mantıksal Operatörler **************/

let price = "100"
let user = "talib"
// == Eşitse
console.log ("==: ",price == 1)
console.log ("==: ",price == 100)

// === Hem değeri hem de türü eşitse
console.log ("===: ",price === 1)
console.log ("===: ",price === 100)

// != Eşit değilse
console.log(price != 1)

// < Küçükse
console.log(price<100)

// <= Küçük veya eşitse
console.log(price<=100)

// > Büyükse
console.log(price>100)

// && ve
price=0
console.log(price>0 && user !="guest")

// || veya
console.log(price>0 || user !="guest")

// ! değil (tersi)
user="guest"
price =1
console.log(price>0 && !user =="guest")

console.log("a",!!2)