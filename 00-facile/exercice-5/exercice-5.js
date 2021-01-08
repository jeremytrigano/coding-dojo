function exercice5(cote1, cote2, cote3) {
  //   - Un triangle est `équilatéral` lorsque ses 3 côtés sont égaux
  if (cote1 + cote2 < cote3 || cote2 + cote3 < cote1 || cote3 + cote1 < cote2) {
    return `impossible`;
  } else if (cote1 == cote2 && cote1 == cote3) {
    return `équilatéral`;
  } else if (cote1 == cote2 || cote2 == cote3 || cote3 == cote1) {
    return `isocèle`;
  } else {
    return `scalène`;
  }
}

// Ne touchez pas à la ligne suivante
module.exports = exercice5;
