import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017/shorten",
    {
        dbName: "shorten",
    }
)
    .then(() => { console.log("mongoo to DB"); })
    .catch((err) => { console.log(err); })

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
