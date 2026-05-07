function calcularCosto() {
  const minutos = parseFloat(document.getElementById('minutos').value);
  const costoPorMinuto = parseFloat(document.getElementById('costoPorMinuto').value);

  const errMinutos = document.getElementById('errMinutos');
  const errCosto = document.getElementById('errCosto');

  errMinutos.classList.remove('visible');
  errCosto.classList.remove('visible');

  let valido = true;

  if (isNaN(minutos) || minutos <= 0) {
    errMinutos.classList.add('visible');
    valido = false;
  }

  if (isNaN(costoPorMinuto) || costoPorMinuto <= 0) {
    errCosto.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const total = minutos * costoPorMinuto;

  document.getElementById('resMinutos').textContent = `${minutos} min`;
  document.getElementById('resCostoPorMinuto').textContent = `$${costoPorMinuto.toFixed(2)}`;
  document.getElementById('resTotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('resultBlock').classList.add('visible');
}