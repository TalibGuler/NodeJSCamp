//************** String Veri Türü İşlemleri **************/

let email="talibguler@gmail.com";
let firsName="talib";
let lastName="GÜLER";

//String karakter sayısı -> length:
console.log("email: ",email.length)
console.log("firstName: ",firsName.length)
console.log("lastName: ",lastName.length)

//Ilk karakteri bulmak -> [0]:
console.log("email: ",email[0])
console.log("email: ",email.charAt(0))
console.log("firstName: ",firsName[0])
console.log("lastName: ",lastName[0])

//büyük harf / küçük harf:
firsName = firsName.toUpperCase()
console.log(firsName)

firsName = firsName.toLowerCase()
console.log(firsName)

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"))
console.log(email[10])

email.search("olmayan") // -1

//belli bir yere kadar al -> slice: (domain bilgisi)
let DOMAIN = email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice( 0,DOMAIN.indexOf('.'))) // sadece gmail kısmını aldık

//bilgiyi degistir -> replace:
email = email.replace('gmail.com','kodluyoruz.org')
console.log(email)

//istediğim bilgi var mı ? -> includes:
console.log(email.includes('@')) //true
console.log(email.includes('fds')) //false

//istediğim bilgiyle başladı mı ? bitti mi -> startsWidth, endsWidth:
console.log(email.endsWith('org'))

// ilk harflerini büyük yapmak:
let fullName = `
${firsName[0].toUpperCase()}${firsName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)