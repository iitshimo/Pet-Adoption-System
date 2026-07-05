const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const petRoutes = require("./routes/pets");
const requestRoutes = require("./routes/requests");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// route للصفحة الرئيسية
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use(authRoutes);
app.use(petRoutes);
app.use(requestRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/petadopt")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log("Server running on http://localhost:3000"));
  })
  .catch(err => console.log(err));
