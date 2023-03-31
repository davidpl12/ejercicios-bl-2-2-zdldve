var fechaInicio = new Date('2023-12-29').getTime();
var fechaFin = new Date('2024-10-25').getTime();

var diferencia = fechaFin - fechaInicio;

console.log(diferencia / (1000 * 60 * 60 * 24) + ' dias');
