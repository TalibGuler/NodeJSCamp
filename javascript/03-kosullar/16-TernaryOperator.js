//************** Ternary Operator **************/

// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz

let username = prompt("Kullanıcı bilginizi yazınız")
let info = document.querySelector("#info")

// ternary kullanımı:
//kosul ? dogruysa : yanlıssa

info.innerHTML=`${username.length>0 ? username : "Kullanıcı bilginiz bulunamadı:("}`