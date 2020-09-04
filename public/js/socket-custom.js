var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Peter',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
})

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

})