const express = require('express');
const dotenv = require('dotenv');
const postController = require("./controllers/posts")

dotenv.config();

const app = express();

app.get("/" , (req,res) => {
    res.format({
        text: () => {
            res.type("text").send("Benvenuto nel mio blog!")
        },
        html: () => {
            res.type("html").send("<h1>Benvenuto nel mio blog!</h1>")
        },
        json: () => {
            res.type("json").send({message: "Benvenuto nel mio blog!"})
        },
        default: () =>{
            res.status(406).send("Not Acceptable")
        }
    })
    return;
    res.send("Funziona")
});

app.get("/posts" , postController.index)

app.listen(process.env.PORT || 3000 , () =>{
    console.log(`http://localhost:${process.env.PORT}`)
});