// FETCH API İLE ÇALIŞMAK

// JSON DOSYADAN VERİ CEKMEK
fetch("11-fetchAPI.js/data/settings.json").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

let userListDOM = document.querySelector("#userList")

// API ÜZERİNDEN VERİ CEKME
fetch("https://jsonplaceholder.typicode.com/posts").then(
  response => response.json()
).then(responseJson => {
  responseJson.forEach(item => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = item.title
    userListDOM.appendChild(liDOM)
  })
})