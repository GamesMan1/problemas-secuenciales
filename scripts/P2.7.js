function calcularBoleto() {
  const kilometros = parseFloat(document.getElementById('kilometros').value);
  const costoPorKm = parseFloat(document.getElementById('costoPorKm').value);

  const errKm = document.getElementById('errKm');
  const errCosto = document.getElementById('errCosto');

  errKm.classList.remove('visible');
  errCosto.classList.remove('visible');

  let valido = true;

  if (isNaN(kilometros) || kilometros <= 0) {
    errKm.classList.add('visible');
    valido = false;
  }

  if (isNaN(costoPorKm) || costoPorKm <= 0) {
    errCosto.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const total = kilometros * costoPorKm;

  document.getElementById('resKm').textContent = `${kilometros} km`;
  document.getElementById('resCostoPorKm').textContent = `$${costoPorKm.toFixed(2)}`;
  document.getElementById('resTotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('resultBlock').classList.add('visible');
}