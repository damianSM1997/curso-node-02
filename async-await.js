/*Asyng await
 */
//asyng es de asincrona
//esto lo vuelve una promesa en menos lineas de codigo
//trown es para manejar errores
let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('fernanda');
        }, 3000);


    });
};

let saludo = async() => {
    //tener cuidado con esta porque se puede quedar pegado por siempre
    //
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

saludo().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('Error de ASYNC', e);
});