const experss = require('express');

const app = experss();

app.get('/',(req,res)=>{
    res.send("home")
})

app.listen(3000,()=>{
    console.log("listening")
})