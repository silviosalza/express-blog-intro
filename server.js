const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get("/" , (req,res) => {
    res.send("Funziona")
});

app.listen(process.env.PORT || 3000 , () =>{
    console.log(`http://localhost:${process.env.PORT}`)
});