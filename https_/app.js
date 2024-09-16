// const https = require('https');
// const fs= require('fs');
// const url = require('url');
// // const { url } = require('inspector');
// const { parse } = require('path');


// // const myServer = https.createServer((req,res)=>{
// //     const  log = `${Date.now()} : ${req.url} Request received \n`;
// //     // const myurl = parse()
// //     const myUrl = url.parse(req.url,true)
// //     fs.appendFile("log.txt",log,(err,data)=>{
// //         switch(myUrl.pathname){
// //             case "/":
// //                 res.end("home page");
// //                 break;
// //             default:
// //                 res.end("404 not found");
// //                 break;
// //         }
           

// //     })
// // })
// const myServer = https.createServer((req,res)=>{
//     console.log(req);
    
// res.end("oye hoye");
// })

// myServer.listen(3000,()=>console.log("server started"));


const http = require('http');
const fs= require('fs');
const url = require('url');
// const { url } = require('inspector');
const { parse } = require('path');

const server = http.createServer((req, res) => {
    const  log = `${Date.now()} : ${req.url} Method : ${req.method} Request received \n`;
    // const myurl = parse()
    const myUrl = url.parse(req.url,true)
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
                res.end("home page");
                break;
            case "/about" :
                res.end(`Hello ${myUrl.query.name}`);
                break;
            case "/search":
                res.end(`query :  ${myUrl.query.query}`);
                break;
            default:
                res.end("404 not found");
                break;
        }
           

    })
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
