const http=require("http")
const server=http.createServer((req,res)=>{
    console.log(req)
    res.write("hello welcome to our website")
    res.end()
})
server.listen(3000)