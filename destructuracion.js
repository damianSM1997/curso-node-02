let deadpool = {
    nombre: 'wede',
    apellido: 'Wingston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre} ${ this.apellido} -poder: ${ this.poder} `
    }
}

//console.log(deadpool.getNombre());

// estas 3 lineas se pueden volver una sola por la destructuracion

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

//marcara error sen la consolo solo se pone el nombre

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);