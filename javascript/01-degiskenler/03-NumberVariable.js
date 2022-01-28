//************** Number veri tipleri **************/

//number veri tipini tanımlamak:
let price = 100;
let tax = 0.18;
let priceTax=price* tax;
let total = price + priceTax;
console.log("Fiyat:",price,"KDV Orani:",tax,"KDV Tutari",priceTax,"Total:",total);

//arttırma ve azaltma işlemleri:
let counter = 320;
counter = counter + 1;
counter +=1;
counter ++;
console.log(counter);

counter --;
counter -=1;
console.log(counter);

counter *=10;
console.log(counter);

counter /=2;
console.log(counter);

//işlem önceliği:
console.log(2+3*10) //50 !!!!
console.log((2+3)*10) //50

//mod(kalan) alma %:
//sayı tek mi çift mi ?
console.log(17 % 2) // 0 ise çift, 1 ise tek 

//üs alma
console.log(2*2*2*2);
console.log(2**4)

//aşağı yuvarlama işlemi -> Math.floor:
console.log("Aşağı doğru yuvarlama:",Math.floor(1.7));

//yukarı yuvarlama işlemi -> Math.ceil:
console.log("Yukarı doğru yuvarlama:",Math.ceil(1.9))

//yakına yuvarlama işlemi -> Math.round:
console.log("Yakına doğru yuvarlama:",Math.round(1.2))