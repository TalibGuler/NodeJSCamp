// Object Key-Value

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg":2,
    modelName:"MacBook Pro",
    // model-name:"MacBook Pro",
    model_name:"MacBook Pro"
}

console.log(laptop1)

// Doğru Anahtar Bilgisi Oluşturmak
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])


// Anahtar Bilgisine Yeni Değer Eklemek
laptop1.brand="Mac"
laptop1["brand"]="Mac"
console.log(laptop1)

// Yeni Bilgi Eklemek
laptop1.version="10.15.7"
console.log(laptop1)

// Anahtar Bilgilerine Ulaşmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

// Değer Bilgilerine Ulaşmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log(value)
})