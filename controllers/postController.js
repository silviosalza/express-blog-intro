const postsArray = require("../db/posts.json");

function index(req,res){
    res.format({
        html: () => {
            let html = ["<h1>Hokusai Art</h1>"]
            html.push("<ul>")
            for (const post of postsArray){
                html.push(`<li><h3>${post.titolo}</h3></li>
                <li>${post.contenuto}</li>
                <li><img src="/img/${post.immagine}" alt ="" style="width:400px" > </li>
                <li><h5>Tags: ${post.tags}</h5></li>`)
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