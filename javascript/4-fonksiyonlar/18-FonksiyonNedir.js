//************** İlk Fonksiyonumuzu Tanımlamak **************/

function helloWorld() {
    console.log("Hello World")
}

function hello(){
    console.log("Merhaba")
    helloWorld()
}

// hata alabiliriz
// function userCheck() {
//     if (username && age >= 18) {
//         info.innerHTML="Ehliyet alabilirsiniz"
//     }
//     else if (!username) {
//         info.innerHTML="Kullanıcı adınız yok."
//     }
//     else if (!(age >= 18)) {
//         info.innerHTML="Yaş bilginiz yok ya da 18den küçüksünüz"
//     }
// }

hello()