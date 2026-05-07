function convertir() {
  const tipoCambio = parseFloat(document.getElementById('tipoCambio').value);
  const pesos = parseFloat(document.getElementById('pesos').value);

  const errTipoCambio = document.getElementById('errTipoCambio');
  const errPesos = document.getElementById('errPesos');

  errTipoCambio.classList.remove('visible');
  errPesos.classList.remove('visible');

  let valido = true;

  if (isNaN(tipoCambio) || tipoCambio <= 0) {
    errTipoCambio.classList.add('visible');
    valido = false;
  }

  if (isNaN(pesos) || pesos <= 0) {
    errPesos.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const dolares = pesos / tipoCambio;

  document.getElementById('resDolares').textContent = `$${dolares.toFixed(2)}`;
  document.getElementById('resultBlock').classList.add('visible');
}