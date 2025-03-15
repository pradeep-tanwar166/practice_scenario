

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const userModel = require('./models/script'); // User Model
const usermodel = require('../master crud operation/usermodel');
// const usermodel = require('../master crud operation/usermodel');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("index");
});

app.post("/create",async(req,res)=>{// to create anything and this data will store in the databases mongodb
  let {name,email}=req.body;
 let data= await userModel.create({name,email});
  res.redirect("/read");
})

app.get("/read",async(req,res)=>{// it is used to read your data 
    let user= await userModel.find();
    res.send(user);
})

app.listen(port, () => {
    console.log('The server is running on port', port);
});
