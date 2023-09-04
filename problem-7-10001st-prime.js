function nthPrime(n) {
  let primeIndex = 0;
  let numToCheck = 1;

   while (primeIndex < n) {
    if (isPrime(numToCheck)) {
      primeIndex++;
    }
      numToCheck++
   }

  return numToCheck - 1;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let divisor = 5;
  while (divisor * divisor <= n) {
    if (n % divisor === 0 || n % (divisor + 2) === 0) {
      return false
    }
    divisor += 6
  }

  return true;
}


console.log(nthPrime(10001));