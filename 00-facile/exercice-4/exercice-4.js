// - `1` => `I`
// - `5` => `V`
// - `50` => `L`
// - `100` => `C`
// - `500` => `D`
// - `1000` => `M`

function exercice4(nombre) {
  let roman = "";

  while (nombre > 0) {
    if (nombre >= 1000) {
      roman += "M";
      nombre -= 1000;
    } else if (nombre >= 900) {
      roman += "CM";
      nombre -= 900;
    } else if (nombre >= 500) {
      roman += "D";
      nombre -= 500;
    } else if (nombre >= 400) {
      roman += "CD";
      nombre -= 400;
    } else if (nombre >= 100) {
      roman += "C";
      nombre -= 100;
    } else if (nombre >= 90) {
      roman += "XC";
      nombre -= 90;
    } else if (nombre >= 50) {
      roman += "L";
      nombre -= 50;
    } else if (nombre >= 40) {
      roman += "XL";
      nombre -= 40;
    } else if (nombre >= 10) {
      roman += "X";
      nombre -= 10;
    } else if (nombre == 9) {
      roman += "IX";
      nombre -= 9;
    } else if (nombre >= 5) {
      roman += "V";
      nombre -= 5;
    } else if (nombre == 4) {
      roman += "IV";
      nombre -= 4;
    } else if (nombre < 4) {
      roman += "I";
      nombre -= 1;
    }
  }
  return roman;
}

// Ne touchez pas à la ligne suivante
module.exports = exercice4;
