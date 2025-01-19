import express from "express"

const app=express()
function msg(req,res,next) {
    console.log("Hello");
    next();
    
}

app.use((req,res,next)=>{
    console.log("Top Level Middleware");
    next();
    
});

app.get("/",(req,res,next)=>{
console.log("Hii");
next();

})
app.get("/",(req,res,next)=>{
    console.log("Hii 2");
next();
    
})

app.get("/about",msg,(req,res,next)=>{
    console.log("this is about page");
    res.write("hii ");
    next();
    
},(req,res,next)=>{
    console.log("this is about page 2");
    res.write("how are u?");
    res.end();
    
})


let port=3000;
app.listen(port,"localhost",()=>{
    console.log(`Server Started at http://localhost:${port}`);
    
}

)