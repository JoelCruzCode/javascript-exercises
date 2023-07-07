const reverseString = function (str) {
  output = "";
  const arr = str.split("");

  for (let i = arr.length; i > 0; i--) {
    output += arr[i - 1];
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
