const http=require("http")
const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        res.end("wellcome to our page this is is ")
    }
    if (req.url==="/about"){
        res.end("this is about page weleciome to this second round")
    }
   else{ res.end(
        `
            // <h1>oppps!</h1>
            <p>we can not fide the bage please back to the home page</p>
            <a href="/">Back to home</a>`
        
        
    )}
})
console.log("hello every body")
server.listen(7000)