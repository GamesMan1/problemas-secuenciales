function calcularCobro() {
  const tarifaHora = parseFloat(document.getElementById('tarifaHora').value);
  const horas = parseFloat(document.getElementById('horas').value);

  const errTarifa = document.getElementById('errTarifa');
  const errHoras = document.getElementById('errHoras');

  errTarifa.classList.remove('visible');
  errHoras.classList.remove('visible');

  let valido = true;

  if (isNaN(tarifaHora) || tarifaHora <= 0) {
    errTarifa.classList.add('visible');
    valido = false;
  }

  if (isNaN(horas) || horas <= 0) {
    errHoras.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const horasCobradas = Math.ceil(horas);
  const total = horasCobradas * tarifaHora;

  document.getElementById('resHoras').textContent = horasCobradas;
  document.getElementById('resTotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('resultBlock').classList.add('visible');
}