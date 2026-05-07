function generarPresupuesto() {
  const cliente = document.getElementById('cliente').value.trim();
  const metros = parseFloat(document.getElementById('metros').value);
  const preciom2 = parseFloat(document.getElementById('preciom2').value);

  const errCliente = document.getElementById('errCliente');
  const errMetros = document.getElementById('errMetros');
  const errPrecio = document.getElementById('errPrecio');

  errCliente.classList.remove('visible');
  errMetros.classList.remove('visible');
  errPrecio.classList.remove('visible');

  let valido = true;

  if (!cliente) {
    errCliente.classList.add('visible');
    valido = false;
  }

  if (isNaN(metros) || metros <= 0) {
    errMetros.classList.add('visible');
    valido = false;
  }

  if (isNaN(preciom2) || preciom2 <= 0) {
    errPrecio.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const total = metros * preciom2;

  document.getElementById('resCliente').textContent = cliente;
  document.getElementById('resMetros').textContent = `${metros} m²`;
  document.getElementById('resPrecio').textContent = `$${preciom2.toFixed(2)}`;
  document.getElementById('resTotal').textContent = `$${total.toFixed(2)}`;

  document.getElementById('resultBlock').classList.add('visible');
}