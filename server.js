const express = require("express");
const app = express();

app.get("/", (req, res) => {
    setTimeout(() => {
        res.end("Hello Delay!");
    }, Math.random() * (2000 - 200) + 200);
});

app.get("/:delay", (req, res) => {
    setTimeout(() => {
        res.end("Hello Delay!");
    }, req.params.delay);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server running on ${PORT}`);
});
