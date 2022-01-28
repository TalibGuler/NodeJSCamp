// HATA YÖNETİMİ İÇİN TRY CATCH KULLANIMI

let items;

try {
    items.foreach(item => console.log(item))
    console.log("Hata yönetimi düzgün çalışıyor")
    
} catch (error) {
    let info = "kodluyoruz"
    console.log(info)
}

