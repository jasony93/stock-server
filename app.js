const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to node js server");
});


app.listen(3000, () => {
    console.log("node js!")
})