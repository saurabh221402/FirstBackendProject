require('dotenv').config()
const express = require('express')
const app = express(); 

app.get('/',(req,res) => {
    res.send('<h1>server establish at port 3000</h1>');
})

app.listen(process.env.PORT ,()=> {
    console.log("example app listen at port "+ process.env.PORT);
})