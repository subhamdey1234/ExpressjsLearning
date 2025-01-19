import express from "express";

const app=express()

app.get("/",(req,res)=>{
    console.log(req.method);
    console.log(req.baseUrl);
    console.log(req.hostname);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.cookies);
    console.log(req.ip);
    console.log(req.params);
    
    
    
    
    
//res.write("Hii");
//res.json({"name":"Subham","age":"23"})  
//res.end("Hello");    
//res.status(200);
//res.cookie();
res.end("<h1>Hello</h1>");
    
});

app.get("/home",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/ExpressServer2/pages/Home.html");
})

app.get("/about",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/ExpressServer2/pages/About.html")
})
app.get("/home.css",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/ExpressServer2/pages/home.css");
})

let port=2000;
app.listen(port,"localhost",()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})
