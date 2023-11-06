// import http from "http";
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/about",(req,res)=>{
    res.send("<h1 style='color:crimson'>pehla server i created using express.</h1>")
})
app.get("/notfound",(req,res)=>{
    res.sendStatus(404);
})
app.get("/home",(req,res)=>{
  
    const pathlocation = path.resolve();
    
    res.sendFile(path.join(pathlocation,"./copy.html"));
    // res.sendfile(path.join(pathlocation,"./style.css"));
})

app.listen(5000,()=>{
    console.log("the server at port 5000 is running");
})
