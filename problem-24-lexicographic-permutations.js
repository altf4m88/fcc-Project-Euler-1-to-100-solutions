function lexicographicPermutations(n) {
  let factorialLibrary = {};
  let digitList = [];

  for(let i = 0; i < 10; i++) {
    factorialLibrary[i] = factorial(i);
    digitList.push(i);
  }

  let adjustedIndex = n;
  let permutationString = '';
  for(let i = 9; i >= 0; i--) {
    let divider = factorialLibrary[i];
    let quotient = parseInt(adjustedIndex / divider);
    adjustedIndex = adjustedIndex % divider;

    permutationString += digitList.splice(quotient, 1);
  }


  return parseInt(permutationString);
}


function factorial(n) {
let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
  return result;
}

lexicographicPermutations(699999);