/*
Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del 
Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene 
información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden 
ser usados para descifrarlos:

Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
Lara, además, ha notado una cosa. Los símbolos se restan si están 
inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos 
y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un 
símbolo que no entendemos, mejor que devolvamos un NaN:

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
*/

const charValues = {
  '.': 1,
  ',': 5,
  ':': 10,
  ';': 50,
  '!': 100
};

function decodeNumber(symbols) {
  const regexExpression = /[^.,:;!]/g;
  const found = symbols.match(regexExpression);
  if (found) return NaN;

  let total = 0;
  let newValue = 0;
  let arrSymbols = symbols.split('');

  for (let i = 0; i < arrSymbols.length; i++) {
    if (charValues[arrSymbols[i]] > newValue) {
      total += charValues[arrSymbols[i]] - (newValue + newValue);
    } else {
      total += charValues[arrSymbols[i]];
    }
    newValue = charValues[arrSymbols[i]];
  }
  return total;
}

console.log(decodeNumber('...')); // 3
console.log(decodeNumber('.,')); // 4 (5 - 1)
console.log(decodeNumber(',.')); // 6 (5 + 1)
console.log(decodeNumber('..,!')); // 95 (1 - 1 - 5 + 100)

// console.log(decodeNumber('..,:;!')); // 4 (5 - 1)
