/*
    Considera una lista/array de ovejas. 
    Cada oveja tiene un nombre y un color. 
    Haz una función que devuelva una lista con 
    todas las ovejas que sean de color rojo y 
    que además su nombre contenga tanto las letras n Y a, 
    sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
];

function contadorOvejas(ovejas) {
  return ovejas.filter(
    (oveja) =>
      oveja.color === 'rojo' &&
      oveja.name.toUpperCase().includes('A') &&
      oveja.name.toUpperCase().includes('N')
  );
}

const ovejasFiltradas = contadorOvejas(ovejas);
console.log(ovejasFiltradas);
