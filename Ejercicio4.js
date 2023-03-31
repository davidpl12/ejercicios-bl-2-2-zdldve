'Use strict';

let personas = [
  { nombre: 'Juanma', apellido: 'Cano', edad: 22 },
  { nombre: 'Juanma', apellido: 'Armario', edad: 45 },
  { nombre: 'David', apellido: 'Quiñones', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 24 },
  { nombre: 'Alberto', apellido: 'Rodriguez', edad: 80 },
];

//let personasOrdenado = [];

personas.sort((o1, o2) => {
  if (o1.nombre < o2.nombre) {
    return -1;
  } else if (o1.nombre > o2.nombre) {
    return 1;
  } else {
    return 0;
  }
});

console.log(personas);
