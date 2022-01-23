// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1,2,3,4,5]

// Array içinde Array
let femaleUsers = ["Ayşe","Hülya","Merve"]
let maleUsers = ["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length) // Array içindeki istediğimiz Array'in lenght bilgisini aldık
console.log(items[0][0]) // Ayşe bilgisine ulaştık

// Array içerisinden öğe ayırmak -> splice(pos, item?)
let newItems = items.splice(1,5)
console.log("newItems: ", newItems)
console.log("items: ", items)

// Array içerisindeki öğenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

// Array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son öğeyi çıkarttık
console.log("copyItems: ",copyItems)
console.log("items: ",items)

//------------------------------------------------/

console.log("Kopyalandıktan sonraki hali")
copyItems = items.slice()

copyItems.pop() // son öğeyi çıkarttık
console.log("copyItems: ",copyItems)
console.log("items: ",items)

//------------------------------------------------/

let es6Items = [...items] // es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

// İki Array bilgisini birleştirmek -> [...ES6, ...ES6]
let allUsers =[...femaleUsers, ...maleUsers] // es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

// Array içerisindeki bilgiyi String'e çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// İstediğimiz index bilgisine öğe eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length-1,0,"Melisa")
allUsers.splice(Math.floor(allUsers.length/2),0,"Lorem")
console.log(allUsers)