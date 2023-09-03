function smallestMult(n) {

  function leastCommonMultiple(a, b) {
    return (a * b) / euclideanLoop(a, b)
  }

  function euclideanLoop(a, b) {
      while (b !== 0) {
          const remainder = a % b;
          a = b;
          b = remainder;
      }
      return a;
  }

  let maxLCM = 1;
  for (let i = 1; i <= n; i++) {
    maxLCM = leastCommonMultiple(maxLCM, i)
  }

  return maxLCM;
}

console.log(smallestMult(5));