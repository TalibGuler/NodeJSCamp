const pi = 3.14;

const arguments = process.argv.slice(2);

function alan(yaricap){
    let alan = pi * (yaricap*yaricap);
    console.log(`Alan : ${alan}`)
}

alan(arguments[0]*1);