import express from "express"

const app=express();

//Creating Router instance....
const users=express.Router()
const products=express.Router()
const cart=express.Router()

//declaring Router middle ware for the specific path..
app.use("/users",users);
app.use("/products",products);
app.use('/cart',cart);

//Router API
users.get("/profile",(req,res,next)=>{       //  http://localhost:2000/users/profile
    console.log("Hello From Users Router");
    
})

products.get("/info",(req,res,next)=>{        //  http://localhost:2000/products/info
    console.log("Product info Router");
    
})

cart.get("/cartitems",(req,res,next)=>{
    console.log("----Cart information Is here----");
    
})



app.get("/",(req,res)=>{
     throw new Error("Error in the Request");
   // console.log(a);   //reference type error coz a is not Defined here..
   
    
})
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send("<h1> OOPs SomeThing Went Wrong...</h1>");
    
})




let port=2000;
app.listen(port,"localhost",()=>{
    console.log(`Server started at http://localhost:${port}`);
    
}

)