const postsArray = require("../db/posts.json");

function index(req,res){
    res.format({
        html: () => {
            res.type("html").send("<h1>Post List</h1>")
        },
        json: () => {
            res.type("json").send(postsArray)
        },
        default: () =>{
            res.status(406).send("Not Acceptable")
        }
    })
    return;
    res.send("Post list")
}

module.exports = {
    index,
}