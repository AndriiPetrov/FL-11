// Your code goes here
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(req.headers); next();
})

app.use((req, res, next) => {
    if( req.header === "X-Password qwerty") next();
})

app.delete("../../db/data.json", (req, res) => {
    res.status(401).send("Unauthorized");
})

app.listen(3000);