const { error } = require('console');
const fs = require('fs');


fs.writeFile("hey.txt","my name is sudhanshu and i  am learning node js ",function(err){
if(error)console.log(err);
 console.log("file created");
})