require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const cspMiddleware = require('./middleware/csp');
app.use(cspMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})