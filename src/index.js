// const express = require('express');
// const bodyparser = require('body-parser');
// const app = express();
// const productRoute = require('./routes/product');
// app.use(express.json());

// //middle ware
// app.use((req, res, next) => {
// console.log("Incoming Request Middleware" + req.body);
// next();
// });
// app.use((req, res, next) => {
// console.log("within cors configuration middleware");
// res.setHeader("Access-Control-Allow-Origin", "*");
// res.setHeader(
// "Access-Control-Allow-Headers",
// "Origin, X-Requested-With, Content-Type, Accept"
// );
// res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
// next();
// });
// //middleware
// app.use("/api/product", productRoute);




// app.listen(3000, () => {
// console.log("server started...");
// })


