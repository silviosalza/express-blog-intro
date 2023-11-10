const express = require("express")
const fs = require("fs");
const path = require("path")


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express-serve-static-core").Response} res 
 * @returns 
 */

function index(req,res){

        res.format({
            text: () => {
                res.type("text").send("Benvenuto nel mio blog sull'arte nipponica!")
            },
            html: () => {
                const htmlContent = fs.readFileSync(path.resolve(__dirname,"../index.html"), "utf-8")
                res.type("html").send(htmlContent)
            },
            json: () => {
                res.type("json").send({message: "Benvenuto nel mio blog sull'arte nipponica!Benvenuto nel mio blog sull'arte nipponica!"})
            },
            default: () =>{
                res.status(406).send("Not Acceptable")
            }
        })
        return;
        res.send("Funziona")
    }

module.exports = {
    index,
}