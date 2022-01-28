//************** Boolean veri tipleri **************/

// 0 ve 1'i anlamak ->
let isActive = false; // 0
isActive = true; // 1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11") // True
Boolean("0") // True
Boolean("") // False

userName = "user";
console.log("UserName:",Boolean(userName))

// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0) // False
Boolean(-0) // False
Boolean(-0.1) // True
Boolean(0 === 0) // True

var x =10/"a";
console.log(Boolean(x))