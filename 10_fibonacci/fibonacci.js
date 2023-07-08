function fibonacci(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 0;
  for (i = 2; i <= count; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}
// Do not edit below this line
module.exports = fibonacci;
