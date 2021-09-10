const { Socket } = require('socket.io');
let app = require('./config/server');

app = require('./config/server')


let server = app.listen(80,function(){
    console.log('server rodando')
})

const io = require("socket.io")(server, {
    cors: {
      origin: 'http://localhost',
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
});

app.set('io', io)

io.on('connection',socket=>{
    console.log('Usuario logou')
    socket.on('disconnect',()=>{
        console.log('Desconectou')
    })
    socket.on('msgParaServidor',(data)=>{
        socket.emit('msgParaCliente',{
            apelido: data.apelido,
            mensagem:data.mensagem
        })
        socket.broadcast.emit('msgParaCliente',{
            apelido: data.apelido,
            mensagem:data.mensagem
        })
    })
})
