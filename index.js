const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,'view','index.html'))
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