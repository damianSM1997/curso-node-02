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

let getEmpleado = async(id) => {


    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID: ${ id }`);
    } else {
        return empleadoDB;
    }


}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el empleado ${ empleado.nombre}`);

    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

// como se puede apresiar con las fuinciones
// async y await se puede reducir astante el codigo
// solo se tiene que tomar precausion con el await al momento de que 
// este resiva un dato de lo contrario entrara en un bug infinito

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    // console.log(resp);

    return `${resp.nombre} tiene un salario de ${resp.salario}$`;

}

getInformacion(4)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));