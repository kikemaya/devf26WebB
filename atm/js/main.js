const formulario = document.querySelector('#select-account')


const cuenta = [
  {id: 10, nombre: "Victor", saldo: 900, pin: '0000'}, 
  {id: 24, nombre: "Enrique", saldo: 990, pin: '1234'}, 
  {id: 11, nombre: "Rodrigo", saldo: 200, pin: '8976'}
]

formulario.addEventListener('submit', (event)=> {
  event.preventDefault()
  let pin = prompt("Ingrese su pin", "");
  if (pin != null) {
    if (pin === '0000'){
      console.log('Correcto')
    } else {
      console.log('Incorrecto')
    }
  }
  // console.log(event.target[0].value)
})



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