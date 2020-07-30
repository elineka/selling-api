const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
//const multer = require('multer');
//const upload = multer();
const router = require('./router/register.js');
const db = require('./config/database.js');



app.use(bodyParser.json())
app.use('/router', router)


app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,'views','index.html'))
})

app.post('/login', (req, res) => {
  let {username, password} = req.body;
  if(username==='nekA' && password==='NEE12') {
    res.json({message:'sucessfull logedin', username:username,password:password})
  }else{
    res.json({message:'invalid details', username:username,password:password})
  }
  console.log(username, password)

 
})

app.listen(8081, (error) =>{
  if(error) {
    console.log(error)
  }else {
    console.log('server is running at port 8081')
  }
})
app.get('/sdb', (req, res) => {
  let sql = 'create database selldb'
  db.query(sql, (err, result) => {
    if(err)throw err
    res.send(result)

  } )
})

app.get('/table', (req, res) => {
let sql = 'create table user(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, location VARCHAR(50) NOT NULL);'
db.query(sql, (err, result) => {
  if(err)throw err
  res.send(result)

} )
})

app.get('/products', (req, res) => {
  let sql = 'create table products(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, price DECIMAL NOT NULL, model VARCHAR(255) NOT NULL);'
  db.query(sql, (err, result) => {
    if(err)throw err
    res.send(result)
  
  } )
  })
