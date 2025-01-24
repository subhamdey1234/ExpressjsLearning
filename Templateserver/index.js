import express from "express";
const app=express();
//static  folder
app.use(express.static("E:/m17jspider/express.js/Templateserver/public"));
app.set("view engine","ejs");
app.set("views","./public");

//--------------Middleware------------
app.use(express.json());     //Json Parser
app.use(express.static("./public")) //Serving Static Files


// ----------API'S--------------
app.get("/",(req,res)=>{
    res.render("index.ejs",{name:"Subham Dey",age:"23",address:"Bangalore Marathalli"});
})

app.get("/about", (req, res) => {
    res.render("about.ejs", { fruits:["Apple","Banana","Mango","Grapes"]  })
})
app.get("/login",(req,res)=>{
    res.render("login.ejs",{ title:"Log+in Page" })
})


let port=2000;
let hostname="localhost";
app.listen(port,hostname,()=>{
    console.log(`Server Started at http://${hostname}:${port}`);
    
})