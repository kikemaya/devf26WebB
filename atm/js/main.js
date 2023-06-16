const formulario = document.querySelector("#select-account");
const select = document.querySelector("select");
const body = document.querySelector("body");

const cuentas = [
  { id: 10, nombre: "Victor", saldo: 900, pin: "0000" },
  { id: 24, nombre: "Enrique", saldo: 990, pin: "1234" },
  { id: 11, nombre: "Rodrigo", saldo: 200, pin: "8976" },
];

const validatePIN = (id, pin) => {
  let selected = cuentas.filter((cuenta) => {
    return cuenta.id === parseInt(id);
  });
  if (selected[0].pin === pin) {
    alert("Bienvenido");
    // body.innerHTML= ''
    location.href = "/opciones/";
  } else {
    alert("Intenta nuevamente");
  }
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let user_id = event.target["cuenta"].value;

  let pin = prompt("Ingrese su pin", "");
  if (pin != null) {
    validatePIN(user_id, pin);
  }
  // console.log(event.target[0].value)
});

cuentas.forEach((cuenta) => {
  let option = document.createElement("option");
  option.value = cuenta.id;
  option.innerText = cuenta.nombre;
  select.appendChild(option);
});

// [] <- Array
// {} <- Object

// Pseudocódigo
/*
1. Seleccionar la cuenta 
2. Cuando se seleccione una cuenta se solicitará el pin 
3. Validar el pin ingresado y si el pin proporcionado es incorrecto intentar nuevamente y sí es correcto mostrar menú de opciones
4. Mostra menú de opciones (consultar, depositar, retirar, salir)
5. Dependiendo de la opción seleccionada mostrar la pantalla correspondiente
*/
