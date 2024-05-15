// const {readFileSync,writeFileSync}=require("fs")
// // const first=readFileSync("./content/first.txt","utf8")
// // const second=readFileSync("./content/sevond.txt","utf8")
// // writeFileSync("./content/result.txt",`here is the result of the two function ${first}. ${second}`,{flag:"a"})
// // console.log(first,second)
// console.log("hello")
// readFileSync('./content/first.txt',(err,result)=>{
//     console.log("hello")
   
//     if(err){
//         console.log(err)
//         return
//     }
//     else{
//         console.log(result)
//     }

// })
const fs = require('fs');

fs.readFile('./content/first.txt', "utf8", (err, result1) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result1;

    fs.readFile("./content/sevond.txt", "utf8", (err, result2) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result2;

        fs.writeFile("./content/result.txt", `here is the content of the results: please add the first and the second text isn't combined ${first} and ${second}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("File written successfully.");
        });
    });
});
console.log("the second task is starting")
