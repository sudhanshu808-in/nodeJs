const { error, log } = require('console');
const fs = require('fs');


// fs.writeFile("hey.txt","my name is sudhanshu and i  am learning node js ",function(err){
// if(error)console.log(err);
//  console.log("file created");
// })


// fs.appendFile("hey.txt","   and i am enjoying it ", function(err){
//     if(error) console.log(err);
//     else console.log("appended successfuly");
// })

// fs.rename("hey.txt","introduction.txt",function(err){
//     if(error) console.log(err);
//     console.log("file renamed");
// })

// fs.copyFile("introduction.txt","./intermediate/newIntro.txt",function(){
//     if(error) console.log(err);
//     else console.log("file copied");
// })

// fs.unlink("hey.txt",function(err){
//     if(error) console.log(err);
//     console.log("file has been deleted");
// })

fs.rm("delete",{recursive:true},function(err){
    if(error)console.log(err);
    console.log("deleted");
})