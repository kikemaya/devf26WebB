// PROGRAMA PARA SABER EN QUE ETAPA DE SU VIDA SE ENCUENTRA UNA PERSONA
// SI UNA PERSONA ES MENOR O IGUAL A 11 AÑOS, ENTONCES, ES UN NIÑO
// SI UNA PERSONA ES MAYOR A 13 AÑOS Y MENOR A 18, ENTONCES, ES UN ADOLESCENTE
// SI UNA PERSONA ES MAYOR O IGUAL A 18 AÑOS Y MENOR A 65, ENTONCES, ES UN ADULTO
// DE OTRA FORMA, ES UN ADULTO MAYOR

// SOLICITAR DATOS
let nombreCompleto = prompt("Escribe tu nombre completo");
let anhoDeNacimiento = Number(prompt("Escribe tu año Nacimiento"));
let anhoActual = Number(prompt("Escribe el año actual"));

let edad = anhoActual - anhoDeNacimiento;

// VALIDACION PARA SABER SI EL USUARIO INGRESO LOS DATOS SOLICITADOS
if (nombreCompleto == "" || anhoDeNacimiento == 0 || anhoActual == 0) {
  let mensaje = "Te hacen falta datos";
};
