function calcularHipotenusa() {
  const catA = parseFloat(document.getElementById('catA').value);
  const catB = parseFloat(document.getElementById('catB').value);

  const errA = document.getElementById('errA');
  const errB = document.getElementById('errB');

  errA.classList.remove('visible');
  errB.classList.remove('visible');

  let valido = true;

  if (isNaN(catA) || catA <= 0) {
    errA.classList.add('visible');
    valido = false;
  }

  if (isNaN(catB) || catB <= 0) {
    errB.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const hipotenusa = Math.sqrt(catA ** 2 + catB ** 2);

  document.getElementById('resHipotenusa').textContent = hipotenusa.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}