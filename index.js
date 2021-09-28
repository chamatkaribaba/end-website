const express = require("express");
const app = express();
const path = require("path");

app.get("/", (request, response)=>{
  response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/rick", (req, res)=>{
  res.sendFile(path.join(__dirname, "rickroll.html"))
})

app.listen(3000, ()=>{
  console.log("app listenin'");
})