/*
    El Grinch está abriendo las cartas que iban a 
    Santa Claus y las está dejando hechas un lío. 😱

    Las cartas son una cadena de texto que incluyen 
    regalos y paréntesis ().

    Para saber si una carta es válida ✅, debes 
    comprobar que los paréntesis cierran correctamente 
    y que, además, no vayan vacíos.

    ¡Pero ojo! Porque el Grinch ha dejado llaves 
    { y corchetes [ dentro de los paréntesis que 
    hacen que no sean válidas. Por suerte sólo los 
    ha dejado en medio de los paréntesis...

    Ejemplos:

    "bici coche (balón) bici coche peluche" // -> ✅
    "(muñeca) consola bici" // ✅

    "bici coche (balón bici coche" // -> ❌
    "peluche (bici [coche) bici coche balón" // -> ❌
    "(peluche {) bici" // -> ❌
    "() bici" // ❌

    Crea una función que pasándole el texto de la carta, 
    devuelva true si es válida y false si no lo 
    es. ¡Y acaba con la travesura del Grinch!
*/

// "(a() bici (a)" debería ser inválido

// let carta = '(balón) bici coche peluche';
// let carta = '(muñeca) consola bici';
// let carta = '(a() bici (a)';
// let carta = 'bici (balón bici coche'; //debería ser false...
let carta = '() bici'; //debería ser false...
// "bici (balón bici coche" debería ser false..
// let carta = 'peluche (bici [coche)'; //debería ser false...

function isValid(letter) {
  const valid = !letter.includes('[') || !letter.includes('{');
  let paraOpenIndex = letter.indexOf('(');
  let paraCloseIndex = letter.indexOf(')');

  if (paraOpenIndex < 0 || paraCloseIndex < 0) {
    return false;
  } else {
    let arr = letter.split('');
    let sliceOfWord = arr.slice(paraOpenIndex + 1, paraCloseIndex);

    if (
      sliceOfWord.includes('[') ||
      sliceOfWord.includes('{') ||
      sliceOfWord.includes('(') ||
      sliceOfWord.includes(')')
    )
      return false;
    if (sliceOfWord.length === 0) return false;
    if (sliceOfWord.length > 0 && valid) return true;
  }
}

console.log(isValid(carta));
