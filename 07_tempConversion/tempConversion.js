const convertToCelsius = function (temp) {
  const celsius = Number((((temp - 32) * 5) / 9).toFixed(1));
  return celsius;
};

const convertToFahrenheit = function (temp) {
  const f = Number(((temp * 9) / 5 + 32).toFixed(1));
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
