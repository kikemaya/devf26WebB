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
        <a class="btn btn-info" href="#" role="button">Retirar</a>
      </div>
      <div class="col">
        <a class="btn btn-danger" href="#" role="button">Salir</a>
      </div>
    </div>
  </div>`;

  wrapper.innerHTML = menu;
};

const consultar = () => {
  actions.innerHTML = ""
  actions.innerHTML = `<p class="mt-4">Su saldo es $${selected[0].saldo}</p>`
};

const depositar = () => {
  actions.innerHTML = ""
  actions.innerHTML = `<p class="mt-4">Deposito</p>`
};