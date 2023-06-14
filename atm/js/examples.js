// function sum() {
//   return 4 + 6
// }
// console.log(sum())

function sum(value1, value2) {
  return value1 + value2;
}

console.log(sum(8, 3));
console.log(sum(8, 78));

// a + b
// a - b
// a * b
// a / b
// a % b -> residuo de una división

// Tipos de datos

// 'Víctor' -> string
// 1 -> int
// 3.1416 -> float
// true, false -> boolean
// [1, 2, 3, 4] -> array
// {name: 'Víctor', age: 37} -> object
// null -> null

var victor = 18;
var enrique = 24;

// console.log(victor - enrique)

function restaEdades(userAge1, userAge2) {
  var MAYOR_DE_EDAD = 18;
  var resta = userAge1 - userAge2;

  // if(userAge1 > 18){
  //   'Es mayor'
  // } else {
  //   'No es mayor'
  // }

  var user1EsMayor = userAge1 >= MAYOR_DE_EDAD ? "Es mayor" : "No es mayor";
  return {
    diferencia: resta,
    es_mayor: user1EsMayor,
  };
}

console.log(restaEdades(victor, enrique));
