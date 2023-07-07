const sumAll = function (a, b) {
  let sum = 0;
  if (typeof a === "number" && typeof b === "number" && a >= 0 && 0 <= b) {
    if (a > b) {
      tmp = a;
      a = b;
      b = tmp;
    }
    for (i = 1; i <= b; i++) {
      sum += a;
      a++;
    }
    return sum;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
