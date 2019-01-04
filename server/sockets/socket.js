const {io} = require('../server');

io.on('connection',(client) =>{
	console.log('Usuario Conectado');
	
	client.emit('enviarMensaje',{
			usuario: 'Administrador',
			mensaje: 'Bienvenido a esta aplicación'
	});

	client.on('disconnect', ()=>{
		console.log('Usuario desconectado');
	});
	//escuchar el cliente
	client.on('enviarMensaje',(data,callback) =>{
		console.log(data);
		//client.emit('enviarMensaje',data); escucha el servidor el cliente que mando el mensaje 
		/*if(mensaje.usuario){
			callback({
				resp:'TODO SALIO BIEN!'
			});	
		}else{
			callback({
				resp:'TODO SALIO MAL!!!!!!!!'
			});
		}*/
		//para hacer un broadcast
		client.broadcast.emit('enviarMensaje',data);
	});
});