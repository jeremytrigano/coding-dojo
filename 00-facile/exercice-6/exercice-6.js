function exercice6() {
  res = "";
  for (n = 1; n < 200; n++) {
    if (n % 15 == 0) {
      res += "FizzBuzz - ";
    } else if (n % 3 == 0) {
      res += "Fizz - ";
    } else if (n % 5 == 0) {
      res += "Buzz - ";
    } else {
      res += n.toString() + " - ";
    }
  }
  res += "Buzz";
  return res;
}

// Ne touchez pas à la ligne suivante
module.exports = exercice6;
