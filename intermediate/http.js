const http =  require('http');
const server= http.createServer(function(req,res){
    res.end("hello boi");
})
server.listen(3000);