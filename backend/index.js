var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

//app.get('/',(req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //next();


//const todoItems = require('./todo-items.json');
app.get('/todo-items', function (req, res, next) {
    res.json({ data: todoItems })
})

app.listen(80, function () {
    console.log('Server listening on port 80')
})
