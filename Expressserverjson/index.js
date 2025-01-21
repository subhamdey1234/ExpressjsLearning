import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import path from "path";

const app=express();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static("E:/m17jspider/express.js/Expressserverjson/public"));

app.get("/",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/Expressserverjson/public/index.html")
})

app.get("/login",(req,res)=>{
res.sendFile("E:/m17jspider/express.js/Expressserverjson/public/login.html")
})
app.post("/submit",(req,res)=>{
    const formdata=req.body;

    fs.readFile('data.json',(err,data)=>{
        if (err) {
            console.log(err);
            return res.status(404).send("404 Error");
            
        }
        
        const jsondata=data?JSON.parse(data):[];
        jsondata.push(formdata);

fs.writeFile('data.json',JSON.stringify(jsondata,null,2),(err)=>{
if (err) {
    console.log(err);
    return res.status(404).send("404 Error");

    
}
res.send("Data Sent Successfully");
})


    })
})


app.post("/Login",(req,res)=>{
    const formdata=req.body;

    fs.readFile('login.json',(err,data)=>{
        if (err) {
            console.log(err);
            return res.status(404).send("404 Error");
            
        }
        
        const jsondata=data?JSON.parse(data):[];
        jsondata.push(formdata);

fs.writeFile('login.json',JSON.stringify(jsondata,null,2),(err)=>{
if (err) {
    console.log(err);
    return res.status(404).send("404 Error");

    
}
res.send("Login Data Sent Successfully");
})


    })
})

let port=2000;
let hostname="localhost";
app.listen(port,hostname,()=>{
    console.log(`Server Started at http://${hostname}:${port}`);
    
}

)