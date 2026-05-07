function calcularArea() {
  const base = parseFloat(document.getElementById('base').value);
  const altura = parseFloat(document.getElementById('altura').value);

  const errBase = document.getElementById('errBase');
  const errAltura = document.getElementById('errAltura');

  errBase.classList.remove('visible');
  errAltura.classList.remove('visible');

  let valido = true;

  if (isNaN(base) || base <= 0) {
    errBase.classList.add('visible');
    valido = false;
  }

  if (isNaN(altura) || altura <= 0) {
    errAltura.classList.add('visible');
    valido = false;
  }

  if (!valido) return;

  const area = (base * altura) / 2;

  document.getElementById('resArea').textContent = area.toFixed(2);
  document.getElementById('resultBlock').classList.add('visible');
}