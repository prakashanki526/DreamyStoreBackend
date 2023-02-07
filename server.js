const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const discover = require("./routes/discover");


const app = express();
app.use(cors());

connection();

app.get("/health",(req,res) => {
    res.send(`Up and running at ${new Date()}`);
});

app.use("/discover",discover);

app.use((req,res,next) => {
    res.status(404).send("Page not found!!");
});

app.use((err,res,req,next) =>{
    res.status(500).send("Something went wrong");
});


const host = process.env.HOST || "localhost";
const port = process.env.PORT || "3001";

app.listen(port,(req,res) => {
    console.log(`Server started at http://${host}:${port}`);
});