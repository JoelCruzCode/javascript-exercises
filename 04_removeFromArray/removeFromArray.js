const removeFromArray = function (arr, ...args) {
  //   const newArr = [];
  //   arr.forEach((el) => {
  //     if (!args.includes(el)) {
  //       newArr.push(el);
  //     }
  //   });
  //   return newArr;
  // };
  const newArr = arr.filter((el) => !args.includes(el));
  return newArr;
};
// Do not edit below this line
module.exports = removeFromArray;
