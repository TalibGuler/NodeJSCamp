function getData(data) {
    return new Promise((resolve,reject) =>{
        console.log("Veriler alınmaya çalışılıyor...")

        if(data) {
            resolve("verilen alındı")
        }else{
            reject("veriler alınamadı")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve,reject) => {
        console.log("Veriler düzenleniyor...")
        
        if(receivedData) {
            resolve("Verilen düzenlendi")
        }else {
            reject("Veriler düzenlenemedi")
        }
    
    })
}

// getData(true)
// .then(result => {
//     console.log(result)
//     return cleanData(false)
// }).then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })

// ASYNC - AWAIT

// async function processData(){

//     try {
//         const receivedData = await getData(true);
//         console.log(receivedData);
//         const cleanedData = await cleanData(true);
//         console.log(cleanedData);
//     } catch (error) {
//         console.log(error)
//     }

   
// }

// processData();

const books = [
    {name: 'Book 1', author: 'Yazar 1'},
    {name: 'Book 2', author: 'Yazar 2'},
    {name: 'Book 3', author: 'Yazar 3'}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook) => {
    const promise1 = new Promise((resolve,reject) =>{
        books.push(newBook);
        resolve(books);
        reject('BIR HATA OLUSTU');
    })
    return promise1;
};

// addBook({name: 'Book 4', author: 'Yazar 4'})
//     .then(() => {
//         console.log('YENI LISTE');
//         listBooks();
//     }).catch((error) => {
//         console.log(error);
//     })

async function showBooks(){
    try {
        await addBook({name: 'Book 5', author: 'Yazar 5'})
    listBooks()
    } catch (error) {
        console.log(error)
    }
    
}

showBooks();