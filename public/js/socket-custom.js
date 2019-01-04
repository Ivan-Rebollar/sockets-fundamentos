var socket = io();
    	socket.on('connect', function(){
    		console.log('Conectado al servidor');
    	});
    	//escuchar
    	socket.on('disconnect', function(){
    		console.log('Perdimos conexión con el servidor');
    	});
    	//enviar información
    	socket.emit('enviarMensaje',{
    		usuario: 'Ivan',
    		mensaje:'Hola mundo'
    	},function(resp){
    		console.log('respuesta server: ',resp);
    	});
    	//escuchcando informacion
    	socket.on('enviarMensaje',function(mensaje){
    		console.log('Servidor:', mensaje);
    	});