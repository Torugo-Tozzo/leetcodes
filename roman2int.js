/**
 * @param {string} s
 * @return {number}
 */
//I,II,III
//V, IV
//X, IX
//50 = L, XL,
//100 = C, XC,
//500 = D, CD
//1000 = M, CM

var romanToInt = function (s) {
  var num = 0;
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i - 3] == "I") {
          return console.error("invalido");
        } else if (s[i + 1] == "V") {
          num += 4;
          i++;
        } else if (s[i + 1] == "X") {
          num += 9;
          i++;
        } else {
          num++;
        }
        break;
      case "V":
        num += 5;
        break;
      case "X":
        //antes de L e C
        if (s[i + 1] == "L") {
            num += 40;
            i++;
          } else if (s[i + 1] == "C") {
            num += 90;
            i++;
          } else
        num += 10;
        break;
      case "L":
        num += 50;
        break;
      case "C":
        //antes de D e M
        if (s[i + 1] == "D") {
            num += 400;
            i++;
          } else if (s[i + 1] == "M") {
            num += 900;
            i++;
          } else
        num += 100;
        break;
      case "D":
        num += 500;
        break;
      case "M":
        num += 1000;
        break;
    }
  }
  return num;
};

//apenas para testes remover depois
const readlineSync = require("readline-sync");
do {
  let resposta = readlineSync.question("numero romano: ");
  console.log(romanToInt(resposta));
} while (true);
