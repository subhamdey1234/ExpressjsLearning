import express from "express";

const app=express();
app.use(express.static("E:/m17jspider/express.js/Staticserver/public"))

//Api/Routing..
app.get("/",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/pages/Home.html");
})
app.get("/style.css",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/style.css")
})
app.get("/image",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/image.jpg")
})
app.get("/contact",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/pages/contact.html")
})
app.get("/downloads",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/pages/downloads.html")
})
app.get("/about",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/pages/about.html")
})
app.get("/pricing",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/pages/pricing.html")
})
app.get("/login",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Staticserver/public/pages/login.html")
})

let port=7000;
app.listen(port,"localhost",()=>{
    console.log(`Server Started http://localhost:${port}`);
    
})