const path = require('path')
var express = require('express')
var app = express();
const http = require('http')
const socketio = require('socket.io');
const server = http.createServer(app)
var cors = require('cors')

// const io = socketio(server)

//for cors issue 
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:4200/",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

var userRoutes = require('../routes/userRoutes.js')
var wordRoutes = require('../routes/wordRoutes.js')

const users = [];


const public = path.join(__dirname, `../public`);
//console.log(itemsRouter);

app.use(cors())
app.use(express.static(public));
app.use(express.json());



// default URL to API
app.use('/auth', userRoutes)
app.use('/words', wordRoutes)


app.use('/', function (req, res) {
  res.send('node-ex-api works :-)');
});

//socket
io.on('connection', (socket) => {

  var handshakeData = socket.request;
  console.log("middleware:", handshakeData._query['player']);

  socket.on('communicate', (from, to, msg) => {
    console.log('from', from, 'to', to, 'msg', msg)

    socket.emit(to, from, msg)
  })

})


server.listen(3000, () => {
  console.log("server started at port 3000")
});

