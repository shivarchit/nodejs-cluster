const express = require("express");
const process = require('process')
const app = express();

app.get("/", (req, res) => {
    res.send(`This is home page.${process.pid}`);
});

app.get("/abc", (req, res) => {
    let i = 0;
    while (i < 1e4) {

    }
    res.send(`This is home abc. ${process.pid}`);
});

app.post("/", (req, res) => {
    res.send(`This is home page with post request. ${process.pid}`);
});

// PORT
const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});