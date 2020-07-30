const express = require('express');

const mysql = require('mysql');


//connection to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "selldb"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected database");
  });

  
module.exports = db;