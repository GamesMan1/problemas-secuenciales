const tarifaNoche = 850;
const IVA = 0.16;

function calcularCobro() {
  const noches = parseInt(document.getElementById('noches').value, 10);
  const errNoches = document.getElementById('errNoches');

  errNoches.classList.remove('visible');

  if (isNaN(noches) || noches <= 0) {
    errNoches.classList.add('visible');
    return;
  }

  const subtotal = tarifaNoche * noches;
  const iva = subtotal * IVA;
  const total = subtotal + iva;

  document.getElementById('resNoches').textContent = noches;
  document.getElementById('resSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('resIva').textContent = `$${iva.toFixed(2)}`;
  document.getElementById('resTotal').textContent = `$${total.toFixed(2)}`;

  document.getElementById('resultBlock').classList.add('visible');
}