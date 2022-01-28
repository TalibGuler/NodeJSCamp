// array filter kullanımı

// 5 harften fazla olanlar
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// aktif kullanıcılar
const USERS = [
    { fullName: "Ayşe Sümer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
]

// const ACTIVE_USERS = USERS.filter (user=> user.isActive===true)
const ACTIVE_USERS = USERS.filter(user => user.isActive)
const NO_ACTIVE_USERS = USERS.filter(user => user.isActive === false)
console.log(ACTIVE_USERS)
console.log(NO_ACTIVE_USERS)


//------------------ SORU ------------------
const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}
];

//   Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
const age = person.filter(item => item.age > 30)
console.log(age)

//   Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const langue = person.filter(item =>(item.languages[i]="JavaScript")) // HATALI
console.log(langue)
