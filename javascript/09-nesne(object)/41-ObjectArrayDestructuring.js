// Object ve Array Destructuring Nasıl Kullanılır

// Object Destructuring

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// obje icindeki bilgilerin tek seferde cıkarılması
// let userName = settings.userName
// console.log(userName)

// rename && destructuring
let { userName: user, password, isActive, ip: serverIp, serverName } = settings
console.log(user, password, isActive, serverIp, serverName)
console.log(settings)
console.log(user)

// obje icindeki bazı bilgilerin cıkarılması
let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings
// eger degisken ismi daha önce tanımlandıysa
// let { userName, password, isActive, ...newSettings } = settings

console.log(userName2, password2, isActive2, newSettings)

// obje destructuring ile kopyalanması

// HATALI !!!!
// let settings2 = settings
// settings2.userName = "Değişen Bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2)

// DOGRUSU !!!!
let settings2 = { ...settings }
settings2.userName = "Değişen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

// object kopyalama ile aynı... let settings2 = {...settings}
let copyOfScore = [...score]
console.log(copyOfScore)

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo)



