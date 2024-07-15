function powerDigitSum(exponent) {
  let power = BigInt(Math.pow(2,exponent)).toString();
  let powerDigitArray = power.split('');
  
  let result = powerDigitArray.reduce((carry, sum) => {
    return parseInt(carry) + parseInt(sum);
  });
  return result;
}

powerDigitSum(128);