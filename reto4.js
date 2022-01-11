/*
¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la 
altura del árbol, que será un entero positivo del 1 a, 
como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

5
hieght * hieght = 25 - 5 = 20
height - 1 = 

Creamos un triángulo de asteriscos * con la altura proporcionada 
y, a los lados, usamos el guión bajo _ para los espacios. Es muy 
importante que nuestro árbol siempre tenga la misma longitud por 
cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un 
ßtronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:
__*__
_***_
*****
__#__
__#__

hieght * hieght = 9 - height = 6 
height - 1 = 5

Ten en cuenta que el árbol es un string y necesitas los saltos 
de línea \n para cada línea para que se forme bien el árbol.
*/
function createXmasTree(height) {
  let width = 0;
  for (let i = 0; i < height; i++) {
    width += 2;
  }
  width = width - 1;
  let center = Math.round(width / 2 - 1);

  let bottom = [];
  for (let j = 0; j < width; j++) {
    bottom.push('_');
  }
  bottom[center] = '#';
  let bottomStr = bottom.join('');

  let result = [];
  for (let i = 0; i < height; i++) {
    result += [
      ...Array(height - 1 - i).fill('_'),
      ...Array(1 + i * 2).fill('*'),
      ...Array(height - 1 - i).fill('_'),
      ...'\n'
    ];
  }

  let arrayWithoutCommas = result
    .split('')
    .filter((item) => item === '_' || item === '*' || item === '\n');
  arrayWithoutCommas.pop();

  return arrayWithoutCommas.join('') + '\n' + bottomStr + '\n' + bottomStr;
}
console.log(createXmasTree(25));
