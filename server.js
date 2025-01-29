const express = require('express');
const app = express();
const db=require('./db.js');
require('dotenv').config();


const bodyParser=require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome to my hotel, what can i get u today?')
})


const personRoutes=require('./routes/personRoutes.js')

const menuRoutes=require('./routes/menuRoutes.js')

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

const PORT= process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log('server is listening to port 3000')
})