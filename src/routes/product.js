// const express = require("express");
// //import pg package in this file
//  const db = require('../db/connection.js');
//  const router = express.Router();
//  console.log("auth route");
//  router.use(express.json()) ;


// router.get("", (req, res) =>
// {
// const connection = db;
// connection.query(
// "SELECT * from products ",
// (error, data) => {
// const result = {};
// if (error)
// {
// throw error;
// }
// else
// {
// result["status"] = "success";
// result["data"] = data.rows;
//  }
// res.send(result);
// }
// );
// });

// //
// router.get("/detail/:id", (req, res) => {
// const product_id  = parseInt(req.params.id);
// console.log("product_id", product_id);

// const connection = db;
// //const statement = `select * from products where product_id ${product_id}'`;
// connection.query(

//     `select * from products where product_id= ${product_id};`,
// // "SELECT * from product where category_id=$1"
    
// (error, data) => {
// const result = {};
// if (error) {
// return res.send('error orccured');
// } 
// res.json(data.rows);
// }
// );
// });


// router.get("/category", (req, res) =>
// {
// const connection = db;
// connection.query(
// "SELECT * from category_table ",
// (error, data) => {
// const result = {};
// if (error)
// {
// throw error;
// }
// else
// {
// result["status"] = "success";
// result["data"] = data.rows;
//  }
// res.send(result);
// }
// );
// });


// router.get("/category/:id", (req, res) => {
//     const category_id  = parseInt(req.params.id);
//     console.log("category_id", category_id);
    
//     const connection = db;
//     //const statement = `select * from products where product_id ${product_id}'`;
//     connection.query(
    
//         `select * from products where category_id= ${category_id};`,
//     // "SELECT * from product where category_id=$1"
        
//     (error, data) => {
//     const result = {};
//     if (error) {
//     return res.send('error orccured');
//     } 
//     res.json(data.rows);
//     }
//     );
//     });
    
    


// module.exports = router;
