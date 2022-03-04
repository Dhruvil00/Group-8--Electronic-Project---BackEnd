const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const db = require('../db/connection.js');
const router = express.Router();
const productRoute = require('./routes/product');
console.log("auth route");
router.use(express.json()) ;




// express returns an object
const app = express();
const port = 3000;
//middleware
app.use(cors(), bodyParser.json());

app.post("/login", db.getadmin_table ); // to post the admin login 
app.post("/add", db.postproduct );// post the product from admin to database


//middle ware
app.use((req, res, next) => {
  console.log("Incoming Request Middleware" + req.body);
  next();
  });
  app.use((req, res, next) => {
  console.log("within cors configuration middleware");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
  });
  //middleware
  app.use("/api/product", productRoute);
  
  
  










app.listen(port, () => {
  console.log(`App Started at http://localhost:${port}`);
});



