const http = require('http')

const server = http.createServer((req,res)=>{

    const url = req.url

    if(url === '/'){
        res.writeHead(200,{'Content-Type' :'text/html'})
        res.write('<h1>INDEX SAYFASI</h1>')
    }
    
    else if(url === '/about'){
        res.write('ABOUT SAYFASI')
    }

    else if(url === '/contact'){
        res.write('CONTACT SAYFASI')
    }

    else{
        res.write('404 SAYFA BULUNAMADI')
    }

    res.end();
});

const port = 3000;

server.listen(port,()=>{
    console.log("Sunucu port 3000 de başlatıldı")
})