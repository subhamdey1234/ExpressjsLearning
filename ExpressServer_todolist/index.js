import express from "express"
import fs from "fs"

const app=express();

app.use(express.static("E:/m17jspider/express.js/ExpressServer_todolist/public"));
//middle ware
app.use(express.json())


app.get("/",(req,res)=>{
    res.sendFile("E:/m17jspider/express.js/ExpressServer_todolist/public/index.html");
})


app.post("/todo/add",(req,res)=>{
const task=req.body;
const todos=JSON.parse(fs.readFileSync("./public/todo.json","utf-8"));
todos.push(task);
fs.writeFileSync("./public/todo.json",JSON.stringify(todos));
res.status(201).send(todos);

});

app.get("/todo/get", (req, res) => {
    const todos = JSON.parse(fs.readFileSync("./public/todo.json", "utf-8"))
    res.status(200).send(todos)
})


let port=3000;


app.listen(port,"localhost",()=>{
    console.log(`Server Started at http://localhost:${port}`);
    
})
