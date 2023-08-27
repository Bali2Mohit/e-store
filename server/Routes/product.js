const express = require("express");
const mysql = require("mysql");
const products = express.Router();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "bali",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

products.get("/",(req,res)=>{
    let productData;
    pool.query("select * from products", (err,rows)=>{
        if (err) {
          res.status(500).send(err);
        } else {
          productData = rows;
          res.status(200).send(productData);
        }
    })
})

module.exports = products;
