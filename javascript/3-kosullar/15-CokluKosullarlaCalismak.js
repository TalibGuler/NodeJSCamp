//************** Çoklu Koşullarla Çalışmak **************/

let username = prompt("Kullanıcı adınız:")
let age = prompt("Yaşınız:")
let info = document.querySelector("#info")
if (username && age >= 18) {
    info.innerHTML="Ehliyet alabilirsiniz"
}
else if (!username) {
    info.innerHTML="Kullanıcı adınız yok."
}
else if (!(age >= 18)) {
    info.innerHTML="Yaş bilginiz yok ya da 18den küçüksünüz"
}