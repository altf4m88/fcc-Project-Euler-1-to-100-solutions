function largeSum(arr) {
  let sum = arr.reduce((carry, sum) => {
    return parseFloat(carry) + parseFloat(sum);
  })

  let stringSum = sum.toString().replace('.', '');

  console.log(stringSum.substring(0, 10))
  return parseInt(stringSum.substring(0, 10));
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);