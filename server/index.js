const express = require("express");
const path = require("path");

var port = 80;

var app = express();

app.use(express.static(path.join(__dirname, 'Site')));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, 'Site/index.html'));
})

console.log(`Listening on port ${port}`)
app.listen(port);
