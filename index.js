// index.js
import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOriginalUrl } from "./controllers/url.js"; // Make sure this path is correct
import bodyParser from "body-parser";
import path from "path";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

mongoose.connect("mongodb://localhost:27017/shorten",
    {
        dbName: "shorten",
    }
)
    .then(() => { console.log("mongoo to DB"); })
    .catch((err) => { console.log(err); })

//rendering the ejs file
app.get('/', (req, res) => {
    res.render('index.ejs', { shortUrl: null });
})   

app.post("/shorten", shortUrl);
app.get("/:shortCode", getOriginalUrl);


const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
