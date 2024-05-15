const name1="davis";
const name2="abel";
const name=require("./2-intro")
const sayhi=require("./1-intro")
const sumnum=require("./3-intro")
sumnum()
console.log(name)
sayhi(name.name1)
sayhi(name.name2)
console.log(__dirname)
module.exports={name1,name2}