import express, { urlencoded } from "express";

const app=express();
//   Static Server..
app.use(express.static("E:/m17jspider/express.js/Staticserver/public"))


/// MiddleWare that will parse Json Data(express.json())
app.use(express.json())

//Middleware to parse url Encoded Data (express.urlencoded())

app.use(express.urlencoded({ extended: true }));


//   Api/Routing..
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

//----GET API-----
app.get("/data",(req,res)=>{
    res.status(200).send({name:"Subham Dey",address:"Bangalore Marathalli"});
})

// ----POST API----
app.post("/data",(req,res)=>{
    console.log(req.headers["content-type"]);
    console.log(req.body);   //Payload (Need To Parse the Data).
    res.status(200).send({message:"Data Recieved"});
    
})


app.post("/urlData",(req,res)=>{
    console.log(req.body);//url payload
    res.status(200).send({message:"Form Submitted"})
})

let port=7000;
let urllink="localhost";
app.listen(port,urllink,()=>{
    console.log(`Server Started http://${urllink}:${port}`);
    
})