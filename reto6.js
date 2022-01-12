/*
Antes de poder disfrutar de la navidad... nos toca 
terminar de rematar los exámenes finales. ¡Y toca 
un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array 
con números y el resultado que se espera.

La función debe devolver los dos valores del Array 
que sumen el resultado esperado. Como a veces pueden 
haber más de dos valores que sumen, se devolverá el 
primero empezando por la izquierda que encuentre otro 
par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.

Veamos unos ejemplos:

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
El resultado tiene que ser un array con dos números.

Una vez que tengas el resultado... ¿cómo podrías hacer 
que fuese lo más óptimo posible para no tener que 
recorrer las mismas situaciones dos veces 🤔?
*/

function sumPairs(numbers, result) {
  let pairs = [];
  for (let i = 0; i < numbers.length; i++) {
    let first = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      let second = numbers[j];
      if (first + second === result && i != j) {
        pairs.push(first);
        pairs.push(second);
        return pairs;
      }
    }
  }
  if (pairs.length === 0) {
    return null;
  }
}

// [0, 2, 2, 3, -1, 1, 5] y 6, debería ser [1, 5]
// [3, 5, 7, 2] y 10, debería ser [3, 7]
console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
// // console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
