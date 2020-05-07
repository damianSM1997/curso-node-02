//callback de tiempo
//setTimeout(function() {
//    console.log('Hola mundo');
//}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'fernando',
        //id: id;
        //esto es lo mismo que lo de abajo
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de tados', usuario);
})