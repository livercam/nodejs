const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const ejs = require("ejs");
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5000
const indexRoot = require("./rooters/index-root");

app.set("view engine", "ejs")
app.use("static",express.static(path.join(__dirname+"public")));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"));

app.use("/", indexRoot);

app.listen(port, () =>{
    console.log(`Server listen to Port http://localhost:${port}`)
})