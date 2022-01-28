//************** Arrow Function Kullanımı **************/

function hello(firstName) {
    console.log(`${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => {console.log(`${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`${firstName}`) // bir parametre, bir dönüş
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName,lastName) => console.log(`${firstName} ${lastName}`) //console.log parantezi
helloFuncV3("helloFuncV2","Last Name info")

const helloFuncV4 = (firstName,lastName) => {
    let info =`Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV2","Other info")