const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout')
const bodyparser = ('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/Public"))


app.get('/', (req,res)=>{
  res.send(layout(''))
})

const PORT = 1337;

app.listen(PORT, ()=> {
  console.log(`App listening in port ${PORT}`)
})
