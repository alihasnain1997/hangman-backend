const path = require('path')
var express = require('express')
var app = express();
var userRoutes = require('../routes/userRoutes.js')


const public = path.join(__dirname, `../public`);
//console.log(itemsRouter);

app.use(express.static(public));

app.use(express.json());

// default URL to API
app.use('/auth', userRoutes)

app.use('/', function (req, res) {
  res.send('node-ex-api works :-)');
});



app.listen(3000, () => {
  console.log("server started at port 3000")
});