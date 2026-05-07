function calcularTiempo() {
  const distancia = parseFloat(document.getElementById('distancia').value);
  const velocidad = parseFloat(document.getElementById('velocidad').value);

  const errDistancia = document.getElementById('errDistancia');
  const errVelocidad = document.getElementById('errVelocidad');

  errDistancia.classList.remove('visible');
  errVelocidad.classList.remove('visible');

  let valido = true;

  if (isNaN(distancia) || distancia <= 0) {
    errDistancia.classList.add('visible');
    valido = false;
  }

  if (isNaN(velocidad) || velocidad <= 0) {
    errVelocidad.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const tiempoHoras = distancia / velocidad;
  const horas = Math.floor(tiempoHoras);
  const minutos = Math.round((tiempoHoras - horas) * 60);

  document.getElementById('resDistancia').textContent = `${distancia} km`;
  document.getElementById('resVelocidad').textContent = `${velocidad} km/h`;
  document.getElementById('resTiempo').textContent =
    horas > 0 ? `${horas}h ${minutos}min` : `${minutos}min`;
  document.getElementById('resultBlock').classList.add('visible');
}