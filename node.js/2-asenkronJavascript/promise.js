// Bir işlemin sonucunu temsil eden js nesnesidir.

// const promise1 = new Promise((resolve, reject) => {
//     resolve('VERILER ALINDI');
//     reject('BAGLANTI HATASI');
// }); // resolve olumlu oldugunda, reject olumsuz oldugunda döner.

// promise1
// .then(value =>{
//     console.log(value);
// }).catch(error => {
//     console.log(error);
// });

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

addBook({name: 'Book 4', author: 'Yazar 4'})
    .then(() => {
        console.log('YENI LISTE');
        listBooks();
    }).catch((error) => {
        console.log(error);
    })