// 1 e ve kendisine bölünecek, 1 den büyük pozitif tamsayı olacak

const arguments = process.argv.slice(2);

function showPrimeNumbers (lowNumber, highNumber){
    for (let i = lowNumber; i < highNumber; i++) {
        let isPrime = true;

        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j !==i){
                isPrime = false;
            }             
        }
        
        if(isPrime){
            console.log(i)
        }

    }
}

showPrimeNumbers(arguments[0] *1,arguments[1] *1);

//console.log(process.argv.slice(2));

// Process Object

// Şu an için tamamıyla kavramak bizi zorlasa da process nesnesi, node.js çalışma ortamında o an yapılan iş ile ilgili bilgiler içerir. Bizim için önemli olan kısım ise process.argv özelliğidir. process.argv bize node.js programı çalıştığında komut satırından girilen argümanları bir array olarak bize sunar.