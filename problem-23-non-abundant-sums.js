function sumOfNonAbundantNumbers(n) {

  let properDivisorSumLibrary = {};
  let abundantNumbers = [];
  let sumOfAbundantPairs = new Set([]);
  let numberSet = new Set([]);
 
  for (let i = 1; i <= n; i++) {
    let properDivisor = findProperDivisor(i);
    properDivisorSumLibrary[i] = properDivisor;
    numberSet.add(i);

    if (properDivisor > i) {
      abundantNumbers.push(i);
    }
  }

  abundantNumbers.forEach((aPair) => {
    abundantNumbers.forEach((bPair) => {
      sumOfAbundantPairs.add(aPair + bPair);
    })
  })

  let nonSumNumbers = numberSet.difference(sumOfAbundantPairs);
  let nonSumNumbersTotal = 0;
  nonSumNumbers.forEach((num) => {
    nonSumNumbersTotal += num;
  });

  return nonSumNumbersTotal;
}

function findProperDivisor(num) {
  let limit = Math.sqrt(num);
  let divisorSum = 1;

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      divisorSum += i;
      if (i !== num / i) {
        divisorSum += num / i;
      }
    }
  }
  return divisorSum;
}

sumOfNonAbundantNumbers(10000);