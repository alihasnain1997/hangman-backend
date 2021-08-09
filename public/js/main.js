const playerName = 'player1'


const socket = io("http://localhost:3000/", {
    query: {
        "player": playerName
    }
});

socket.on(playerName, (message) => {
    console.log(message)
})


socket.on('player2', (to, from, msg) => {
    console.log(to, from, msg)
})

var from = 'player1';
var to = 'player2';
var msg = 'lets play'

setTimeout(() => {
    console.log('emiting')
    socket.emit('communicate', from, to, msg)
}, 5000)

