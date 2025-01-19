import express from "express";

const app=express();

//API /Routings ......

//app.use("/",(req,res)=>{
    //console.log(req.method,req.headers,req.hostname,req.url);
  //  console.log(req.url);

//    res.send("Hello")
    
//})



app.get("/",(req,res)=>{
   res.send("<marquee><h1>Welcome to Home Page</h1></marquee>")
    
})
app.post("/",(req,res)=>{
    res.send("This is post method")
})

app.get("/about",(req,res)=>{
    res.send("<marquee><h1>Welcome to About</h1><marquee>")
     
 })
 app.get("/contact",(req,res)=>{
    res.send("<marquee><h1>Welcome to contacts page</h1></marquee>")
 })


app.listen(5000,"localhost",()=>{
    console.log("Server Started at http://localhost:5000");
    
})