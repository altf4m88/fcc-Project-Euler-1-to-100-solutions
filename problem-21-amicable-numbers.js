function sumAmicableNum(n) {

  let properDivisorSumLibrary = {};
  let divisableNumbers = [];

  for (let i = 1; i <= n; i++) {
    let properDivisor = findProperDivisor(i)
    properDivisorSumLibrary[i] = properDivisor;

    if (properDivisor !== 1) {
      divisableNumbers.push(i);
    }
  }

  let amicableSum = 0;
  divisableNumbers.forEach((item, index) => {
    let properDivisorSum = properDivisorSumLibrary[item];

    if (properDivisorSum === item) {
      return;
    }
  
    if (properDivisorSumLibrary[properDivisorSum]
      === item) {
        return amicableSum += item;
    }
  });

  return amicableSum;
}

function findProperDivisor(num) {
  let limit = Math.sqrt(num);
  let divisorSum = 1;

  for (let i = 2; i < limit; i++) {
    if (num % i === 0) {
      divisorSum += i;
      if (i !== num / i) {
        divisorSum += num / i;
      }
    }
  }
  return divisorSum;
}

sumAmicableNum(1000)