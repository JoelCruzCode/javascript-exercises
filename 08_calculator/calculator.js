const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  return args.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (...args) {
  return args.reduce((acc, cur, i) => acc * cur, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let x = num;
  for (i = 1; i < x; i++) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
