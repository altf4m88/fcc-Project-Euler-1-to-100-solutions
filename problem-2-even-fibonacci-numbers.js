function fiboEvenSum(n) {

  const fibonacciSequence = [1, 2];
  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }

  let evenSum = fibonacciSequence.filter((item) => item % 2 === 0 && item <= n).reduce((sum, current) => sum + current)

  return evenSum;
}

console.log(fiboEvenSum(8))