const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const api = require("./routes/api.js");
app.use("/api", api);

app.get("/", (req, res) => res.redirect('/api/pods'));

app.listen(port, () => console.log(`Started app on port ${port}`));