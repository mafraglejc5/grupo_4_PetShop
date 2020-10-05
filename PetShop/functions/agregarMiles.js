/*
AGREGA UN PUNTO AL NUMERO, PARA DIFERENCIAR LA CANTIDAD
*/
module.exports = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
