/*
    Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El 
    tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos 
    mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, 
    porque al ser niños, igual han colado más espacios de la cuenta)

    Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante 
    de la palabra, por ejemplo _playstation, que significa que está tachado y 
    no se tiene que contar.

    Transforma el texto a un objeto que contenga el nombre de cada regalo y las 
    veces que aparece. Por ejemplo, si tenemos el texto:

    const carta = 'bici coche balón _playstation bici coche peluche'
    Al ejecutar el método debería devolver lo siguiente:

    const regalos = listGifts(carta)

    console.log(regalos)
        {
        bici: 2,
        coche: 2,
        balón: 1,
        peluche: 1
        }
*/
const carta = 'bici coche  balón _playstation bici coche peluche';

// first version
function listGifts(letter) {
  let letterArr = letter.split(' ');
  letterArr = letterArr.filter((item) => item);
  const approvedGifts = letterArr.filter((gift) => !gift.includes('_'));
  const giftsMap = approvedGifts.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  return giftsMap;
}

// second version
// function listGifts(letter) {
//   let letterArr = letter.split(' ');
//   letterArr = letterArr.filter((item) => item);
//   const obj = {};
//   const approvedGifts = letterArr.filter((gift) => !gift.includes('_'));

//   for (let i = 0; i < approvedGifts.length; i++) {
//     if (obj[approvedGifts[i]] === undefined) {
//       obj[approvedGifts[i]] = 1;
//     } else {
//       obj[approvedGifts[i]]++;
//     }
//   }
//   return obj;
// }

console.log(listGifts(carta));
