// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40]
console.log("items - ilk hali :", items)

//Array: sona öğe/elaman eklemek -> push
items.push(50)
console.log("50 :", items)

//Array: başa öğe eklemek -> unshift
items.unshift(5)
console.log("5 :", items)

//Array: sondaki öğeyi çıkarmak -> pop
let lastItem = items.pop() //son elemanı lastItem içerisine ekledik
console.log("lastItem :", lastItem, "items: ", items)


//Array: baştaki öğeyi çıkarmak -> shift
let firstItem = items.shift() //ilk elemanı firstItem içerisine ekledik
console.log("firstItem :", firstItem, "items: ", items)

//Array içindeki bir öğenin bilgisinin değiştirilmesi

//ilk eleman değiştirilmesi
items[0] = 5
console.log(items)

//son eleman değiştirilmesi
items[items.length-1] = 1000
console.log(items)

items[10000] = 10000
console.log(items)