const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

const pods = require("./routes/pods.js");
app.use("/pods", pods);

app.get("/", (req, res) => {
    res.type('html').send(`
        <html><body>
            <h1>Try:</h1>
            <ol>
                <li>/pods</li>
            </ol>
        </body></html>
    `);
});

app.listen(port, () => console.log(`Started app on port ${port}`));