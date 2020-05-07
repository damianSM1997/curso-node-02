//function sumar(a, b) {
//    return a + b;
//}

//let sumar = (a, b) => {
//    return a + b;
//}
// como se puede ver la sintaxis puede 
//ser mas corta la flecha simula la palabra return
//let sumar = (a, b) => a + b;
//console.log(sumar(10, 20));
//function saludar1() {
//return 'hola mundo';
//}

//let saludar = () => 'hola mundo';

//function saludar(nombre) {
//    
//}

//let saludar = nombre => `Hola ${nombre}`;


//console.log(saludar('fernando'));

// en funciones de flecha este caso no funciona dado que la palabra this
//apunta fuera de la funcion, del valor fuera de la funcion,
let deadpool = {
    nombre: 'Wede',
    apellido: 'Wingston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre} ${ this.apellido} -poder: ${ this.poder} `
    }
}


console.log(deadpool.getNombre());