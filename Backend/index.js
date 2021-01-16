const express = require("express");
const bodyParser = require("body-parser");
//var mysql = require('mysql');
//require("dotenv").config();
const path = require("path");
const { db } = require("./database-mysql/indexdb");
authRoutes = require("./routes/userRouter");
const app = express();

const PORT = process.env.PORT || 5000;

// app.set("views", path.join(__dirname));
// app.set("view engine", "ejs");

// app.get("/", function (req, res) {

//   res.render("SampleForm", {
//     nanny: nanny,
//   });
// });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, X-Custom-Header, Authorization"
  );
  next();
});
//setup connection to database
db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.log("Unable to connect to the database:" + err));
app.use("/", authRoutes);

app.listen(PORT, () =>
  console.log(
    `listening on port ${PORT} and To get started, visit: http://localhost:5000`
  )
);
