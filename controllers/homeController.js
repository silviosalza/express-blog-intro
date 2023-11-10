function index(req,res){

        res.format({
            text: () => {
                res.type("text").send("Benvenuto nel mio blog sull'arte nipponica!")
            },
            html: () => {
                res.type("html").send("<h1>Benvenuto nel mio blog sull'arte nipponica!</h1>")
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