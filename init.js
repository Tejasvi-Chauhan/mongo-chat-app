const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
   
}

main().then(()=>{
    console.log("connection established");
})
.catch((err)=>{
   console.log(err);
})

let allchats=[
    {
        from:"Ramu",
        to:"ramesh",
        msg:"Hello",
        created_at: new Date(),
    },
       {
        from:"Ram",
        to:"rameshwar",
        msg:"Hello",
        created_at: new Date(),
    },
       {
        from:"price",
        to:"shankar",
        msg:"Hello",
        created_at: new Date(),
    },
       {
        from:"Roma",
        to:"monu",
        msg:"Hello",
        created_at: new Date(),
    },
   {
        from:"Roshan",
        to:"rohit",
        msg:"Hello",
        created_at: new Date(),
    },
   {
        from:"sumit",
        to:"suraj",
        msg:"Hello",
        created_at: new Date(),
    },
   {
        from:"bob",
        to:"joe",
        msg:"Hello",
        created_at: new Date(),
    },
   {
        from:"alice",
        to:"abb",
        msg:"Hello",
        created_at: new Date(),
    },
   {
        from:"bruce",
        to:"luci",
        msg:"Hello",
        created_at: new Date(),
    },



]
 Chat.insertMany(allchats);
