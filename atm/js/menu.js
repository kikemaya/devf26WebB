const actions = document.querySelector("#actions");

// (this) en funciones de Javascript

// function renderMenu(nombre)  {
const renderMenu = (nombre) => {
  let menu = `
  <div>
    <h1>Bienvenido ${nombre}</h1>
    <div class="row">
      <div class="col">
        <a class="btn btn-success" href="#" role="button" onClick="consultar()">Consultar</a>
      </div>
      <div class="col">
        <a class="btn btn-warning" href="#" role="button" onClick="depositar()">Depositar</a>
      </div>
      <div class="col">
        <a class="btn btn-info" href="#" role="button" onClick="retirar()">Retirar</a>
      </div>
      <div class="col">
        <a class="btn btn-danger" href="#" role="button" onClick="salir()">Salir</a>
      </div>
    </div>
  </div>`;

  wrapper.innerHTML = menu;
};

const consultar = () => {
  actions.innerHTML = ""
  actions.innerHTML = `<p>Su saldo es $${selected[0].saldo}</p>`
};

const depositar = () => {
  let amount = prompt("Ingresa el monto a depositar", "");
  let balance = parseFloat(selected[0].saldo) + parseFloat(amount)
  selected[0].saldo = balance.toFixed(2)
  actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`
};

const retirar = () => {
  let amount = prompt("Ingresa el monto a retirar", "");
  let balance = parseFloat(selected[0].saldo) - parseFloat(amount)
  selected[0].saldo = balance.toFixed(2)
  actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`
};

const salir = () => {
  location.reload();
}