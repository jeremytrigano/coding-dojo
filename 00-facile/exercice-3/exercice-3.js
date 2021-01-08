function exercice3(n) {
  let times = 0;

  while (n != 1) {
    times++;
    if (nombreEstPair(n)) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
  }
  return times;
}

function nombreEstPair(nombre) {
  // On verra l'opérateur modulo '%' dans le module intermédiaire !
  return nombre % 2 === 0;
}

// Ne touchez pas à la ligne suivante
module.exports = exercice3;
