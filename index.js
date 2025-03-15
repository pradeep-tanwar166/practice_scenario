const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log('The server is running on port', port);
});
