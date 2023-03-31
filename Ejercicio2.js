const arrayObjetos = [
  {
    nombre: 'David',
    apellido1: 'Pérez',
    apellido2: 'León',
    nacionalidad: 'española',
  },
  {
    nombre: 'Juan',
    apellido1: 'Lopera',
    apellido2: 'Sanchez',
    nacionalidad: 'peruana',
  },
  {
    nombre: 'Antonio',
    apellido1: 'Fernandez',
    apellido2: 'Lopez',
    nacionalidad: 'rumana',
  },
];
var array = [];
const interestedIn = prompt(
  '¿Que es lo que desea obtener? Elija entre nombre, apellido1, apellido2 o nacionalidad'
);

for (let i = 0; i < arrayObjetos.length; i++) {
  array.push(arrayObjetos[i][interestedIn]);

  //array.push(arrayObjetos[i][interestedIn]);
}
console.log(array);
