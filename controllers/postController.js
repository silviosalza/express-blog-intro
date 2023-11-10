const postsArray = require("../db/posts.json");

function index(req,res){
    res.format({
        html: () => {
            let html = ["<h1>Bacheca</h1>"]
            html.push("<ul>")
            for (const post of postsArray){
                html.push(`<li>${post.titolo}</li>
                <li>${post.contenuto}</li>
                <li><img src="/img/${post.immagine}" alt ="" style="width:200px" > </li>`)
            }

            html.push("</ul>")
            res.type("html").send(html.join(""))
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