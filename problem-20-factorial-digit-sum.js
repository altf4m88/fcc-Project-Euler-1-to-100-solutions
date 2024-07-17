function sumFactorialDigits(n) {
  let factorialNum = BigInt(factorial(n))
    .toString().split('');

  return factorialNum.reduce((carry, toSum) => {
    return parseInt(carry) + parseInt(toSum);
  })
}

function factorial(n) {
let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
  return result;
}

console.log(sumFactorialDigits(25));