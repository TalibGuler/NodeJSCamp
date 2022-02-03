const fs = require('fs');

// DOSYA OKUMAK

fs.readFile('./password.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
        console.log("Dosya Okundu")
    }
});

// DOSYA YAZMAK

// fs.writeFile('example.txt', 'KODLUYORUZ', 'utf8', (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Dosya Başarılı Bir Şekilde Oluşturuldu")
//     }
// });

// fs.writeFile('example.json', '{"name:" "Talib"}', 'utf8', (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("JSON Dosya Başarılı Bir Şekilde Oluşturuldu")
//     }
// });

// DOSYAYA VERİ EKLEMEK

// fs.appendFile('example.txt', '\n KODLUYORUZ 2', 'utf8', (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Yeni Veri Eklendi")
//     }
// });

// DOSYA SİLMEK

// fs.unlink('example.json', (error) => {
//     if (error) {
//         console.log("Dosya Silindi")
//     }
// })

// KLASÖRLER OLUŞTURMAK

// fs.mkdir('uploads/img',{recursive : true}, (error) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Klasörler Oluşturuldu")
//     }
// })

// KLASÖRLER SİLMEK

fs.rmdir('uploads',{recursive : true}, (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log("Klasörler Silindi")
    }
})
