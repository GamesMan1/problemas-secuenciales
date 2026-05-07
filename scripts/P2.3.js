function calcularEdad() {
  const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value, 10);
  const anioActual = new Date().getFullYear();
  const errAnio = document.getElementById('errAnio');

  errAnio.classList.remove('visible');

  if (isNaN(anioNacimiento) || anioNacimiento < 1900 || anioNacimiento > anioActual) {
    errAnio.classList.add('visible');
    return;
  }

  const edad = anioActual - anioNacimiento;

  document.getElementById('resEdad').textContent = `${edad} años`;
  document.getElementById('resultBlock').classList.add('visible');
}