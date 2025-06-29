const express=require('express');
const app=express();
const mongoose = require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride = require("method-override");
const port=8080;


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})

app.get('/',(req,res)=>{
    res.send("server started");
})

app.get("/chats", async (req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("form.ejs");
})
app.post("/chats",(req,res)=>{
       let newchat=req.body;

        Chat.insertOne(newchat)
        .then((res)=>{
            console.log("saved");
        })
        .catch((err)=>{
            console.log(err);
        })
        res.redirect("/chats")


})

app.get("/chats/:id/edit",async (req,res)=>{
      let {id}=req.params;
      let chat=  await Chat.findById(id);
    res.render("edit.ejs",{chat});
  
})

app.put("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    let {msg}=req.body;

    let chat= await Chat.findByIdAndUpdate(id,{msg:msg} ,{runValidators:true})
    res.redirect("/chats");
   
})

app.delete("/chats/:id", async (req,res)=>{
       let {id}=req.params;
       await Chat.findByIdAndDelete(id);
       res.redirect("/chats");
       
})