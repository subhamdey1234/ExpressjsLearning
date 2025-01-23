import express from "express";
const app=express();
//static  folder
app.use(express.static("E:/m17jspider/express.js/Templateserver/public"));
app.set("view engine","ejs");
app.set("views","./public");

//middleware
app.use(express.json());



app.get("/",(req,res)=>{
    res.render("index.ejs",{name:"Subham Dey",age:"23",address:"Bangalore Marathalli"});
})

app.get("/about", (req, res) => {
    res.render("index.ejs", { name: "Rahul", age: 20, address: "Delhi" })
})


let port=2000;
let hostname="localhost";
app.listen(port,hostname,()=>{
    console.log(`Server Started at http://${hostname}:${port}`);
    
})