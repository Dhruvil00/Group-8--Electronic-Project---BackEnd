
const getadmin_table = (req, res) => {
  const {email ,password } = req.body;
  Connection.query(
    "SELECT * FROM admin_table  WHERE admin_username = $1 AND admin_password = $2",
    [email,password],
    (error, result) => {
      if (error) {
        throw error;
      }
      if (result.rows.length >= 1) {
        res.status(200).json({ message: "User Found." }); // return response when credentials matched in the pg
      } else {
        res.status(401).json({ message: "User Not Found." });
      }
    }
  );
};

// // database query to insert new record in the table
// // read data from the request body in postman
//post method
const postproduct  = (req, res) => {
  const { Category,productName,Price,Discount,Image,Description } = req.body;
  Connection.query(
    "INSERT INTO products (category_id,product_name,price,discount,product_image,description) VALUES ($1,$2,$3,$4,$5,$6)",
    [Category,productName,Price,Discount,Image,Description],
    (error, result) => {
      if (error) {
       return error;
      }
      res.status(201).json({ message: "New Product added" });// user will get this msg once product is been added
    }
  );
};

///////////////////





router.get("", (req, res) =>
{
const connection = db;
connection.query(
"SELECT * from products ",
(error, data) => {
const result = {};
if (error)
{
throw error;
}
else
{
result["status"] = "success";
result["data"] = data.rows;
 }
res.send(result);
}
);
});

//
router.get("/detail/:id", (req, res) => {
const product_id  = parseInt(req.params.id);
console.log("product_id", product_id);

const connection = db;
//const statement = `select * from products where product_id ${product_id}'`;
connection.query(

    `select * from products where product_id= ${product_id};`,
// "SELECT * from product where category_id=$1"
    
(error, data) => {
const result = {};
if (error) {
return res.send('error orccured');
} 
res.json(data.rows);
}
);
});


router.get("/category", (req, res) =>
{
const connection = db;
connection.query(
"SELECT * from category_table ",
(error, data) => {
const result = {};
if (error)
{
throw error;
}
else
{
result["status"] = "success";
result["data"] = data.rows;
 }
res.send(result);
}
);
});


router.get("/category/:id", (req, res) => {
    const category_id  = parseInt(req.params.id);
    console.log("category_id", category_id);
    
    const connection = db;
    //const statement = `select * from products where product_id ${product_id}'`;
    connection.query(
    
        `select * from products where category_id= ${category_id};`,
    // "SELECT * from product where category_id=$1"
        
    (error, data) => {
    const result = {};
    if (error) {
    return res.send('error orccured');
    } 
    res.json(data.rows);
    }
    );
    });
    
  

module.exports = {getadmin_table,postproduct, router};
