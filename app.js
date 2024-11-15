require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("index");
})

// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';");
//     next();
//   });

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
