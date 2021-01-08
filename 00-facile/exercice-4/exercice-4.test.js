const exercice4 = require("./exercice-4");

test("1 doit retourner I", () => expect(exercice4(1)).toEqual("I"));
test("2 doit retourner II", () => expect(exercice4(2)).toEqual("II"));
test("3 doit retourner III", () => expect(exercice4(3)).toEqual("III"));
test("4 doit retourner IV", () => expect(exercice4(4)).toEqual("IV"));
test("5 doit retourner V", () => expect(exercice4(5)).toEqual("V"));
test("6 doit retourner VI", () => expect(exercice4(6)).toEqual("VI"));
test("9 doit retourner IX", () => expect(exercice4(9)).toEqual("IX"));
test("27 doit retourner XXVII", () => expect(exercice4(27)).toEqual("XXVII"));
test("48 doit retourner XLVIII", () => expect(exercice4(48)).toEqual("XLVIII"));
test("59 doit retourner LIX", () => expect(exercice4(59)).toEqual("LIX"));
test("93 doit retourner XCIII", () => expect(exercice4(93)).toEqual("XCIII"));
test("99 doit retourner XCIX", () => expect(exercice4(99)).toEqual("XCIX"));
test("141 doit retourner CXLI", () => expect(exercice4(141)).toEqual("CXLI"));
test("163 doit retourner CLXIII", () =>
  expect(exercice4(163)).toEqual("CLXIII"));
test("369 doit retourner CCCLXIX", () =>
  expect(exercice4(369)).toEqual("CCCLXIX"));
test("402 doit retourner CDII", () => expect(exercice4(402)).toEqual("CDII"));
test("575 doit retourner DLXXV", () => expect(exercice4(575)).toEqual("DLXXV"));
test("911 doit retourner CMXI", () => expect(exercice4(911)).toEqual("CMXI"));
test("999 doit retourner CMXCIX", () =>
  expect(exercice4(999)).toEqual("CMXCIX"));
test("1024 doit retourner MXXIV", () =>
  expect(exercice4(1024)).toEqual("MXXIV"));
test("2751 doit retourner MMDCCLI", () =>
  expect(exercice4(2751)).toEqual("MMDCCLI"));
test("3000 doit retourner MMM", () => expect(exercice4(3000)).toEqual("MMM"));
