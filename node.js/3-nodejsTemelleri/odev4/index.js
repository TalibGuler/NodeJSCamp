const fs = require('fs');

// 1. İşlem
fs.writeFile('employees.json', ' {"name": "Employee 1 Name", "salary": 2000}', 'utf8', (error) =>{
    if(error){
        console.log(error);
    }
});

// 2. İşlem
fs.readFile('./employees.json','utf8', (error,data) =>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})

// 3. İşlem
fs.appendFile('employees.json', '\n {"name": "Employee 2 Name", "salary": 3000}', 'utf8', (error) =>{
    if(error){
        console.log(error);
    }
});

// 4. İşlem
fs.unlink('employees.json', (error)=>{
    if(error){
        console.log(error);
    }
})