function largestPrimeFactor(number) {
  let factorArray = [];
  let divisor = 2;

  do {
    if (number % divisor === 0) {
      factorArray.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  } while (number > 2)

  return Math.max(...factorArray);
}

console.log(largestPrimeFactor(13195));