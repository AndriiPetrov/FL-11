// Your code goes here
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Hello from Express!");
});

app.listen(port, err => {
    if (err) {
        return console.log("something bad happend", err);
    }
    console.log(`server is istening on ${port}`);
})