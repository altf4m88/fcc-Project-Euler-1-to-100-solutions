function digitFibonacci(n) {

  const fibonacciSequence = [1, 1, 2];
  let digitLength = 0;
  let fibonacciIterationNum = 3;
  while (digitLength < n) {
  const nextNumber = fibonacciSequence[fibonacciIterationNum - 1] + fibonacciSequence[fibonacciIterationNum - 2];
    fibonacciSequence.push(nextNumber);

    digitLength = parseInt(nextNumber.toString().split('').length)
  fibonacciIterationNum++
  }

  return fibonacciSequence.length;
}

digitFibonacci(5);