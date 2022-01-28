//************** Koşullarla Çalışmak **************/

let username = prompt("Kullanıcı adınızı giriniz:")
//eğer kullanıcı bilgisi varsa ekrana yazdır

if(username.length>0){
    console.log(`Kullanıcı bilginiz ${username}`)
}
else{
    console.log("Bilgi yok")
}