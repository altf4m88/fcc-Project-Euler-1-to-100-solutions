function primeSummation(n) {
  let primeSum = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
  }

  return primeSum;
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

console.log(primeSummation(2001));