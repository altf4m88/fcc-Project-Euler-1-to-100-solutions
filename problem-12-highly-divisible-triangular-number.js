function divisibleTriangleNumber(n) {
  let index = 1;
  let result = 0;
  let loopStatus = true;
  while (loopStatus) {
    let triangularNumber = (index * (index + 1)) / 2;
    if (countDivisors(triangularNumber) > n) {
        result = triangularNumber;
        loopStatus = false
    }
    index++;
  }
  
  return result;
}

function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count++; // i is a divisor
            if (i !== n / i) {
                count++; // n/i is also a divisor if it's different from i
            }
        }
    }
    return count;
}

divisibleTriangleNumber(500);