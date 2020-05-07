let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melisa'

}, {
    id: 3,
    nombre: 'juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID: ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    })

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${ empleado.nombre}`);

        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }


    });
}



//getEmpleado(2).then(empleado => {
//console.log(`empledo de base de datos`, empleado);
// si no se pone essta parte saldra un chirizote de un error puñetas
//    getSalario(empleado).then(resp => {
//        console.log(`El salario del empleado ${ resp.nombre} es de ${ resp.salario}$`);
//}, err => console.log(err));
//}, (err) => console.log(err));

//esto sirve para hacer promesas en cadena pero segun el video
//pero al inicio me tomara un poco de problemas entenderlo
getEmpleado(13).then(empleado => {
    return getSalario(empleado);

}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de${resp.salario}`);
}).catch(err => {
    //el catch sirve para manejar errores sin hacer tantas cosas
    console.log(err);
})