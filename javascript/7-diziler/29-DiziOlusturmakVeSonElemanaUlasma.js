//************** Dizilerle Çalışmak **************/

// Array oluşturmak
let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] // boş list

// Array içerisindeki eleman/öğe sayısını öğrenmek
console.log(
    items.length
)
// document.querySelector("#info").innerHTML=items.length

// Array içindeki ilk elemanın çağrıılması
console.log(items[0])

// Array içindeki son elemanın çağırılması
console.log(items[items.length - 1])

// Array içindeki ortadaki elemanın cağırılması
console.log(
    items[Math.floor(items.length/2)]
)

// Değişken içindeki bilginin Array olup olmadığının kontrol edilmesi
console.log(
    typeof(items) // object olarak çıktı veriyor
)

console.log(
    Array.isArray(items)
)

// Hangileri isArray bilgileridir -> True verir ?
console.log("[] : ", Array.isArray([]))
console.log("1 : ", Array.isArray(1))
console.log("true : ", Array.isArray(true))