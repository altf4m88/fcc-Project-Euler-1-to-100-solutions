function latticePaths(gridSize) {
  return combinationFormula(gridSize);
}

function factorial(n) {
let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function combinationFormula(num) {
  let multipliedNum = 2 * num;
  return factorial(multipliedNum) / (factorial(num) * factorial(multipliedNum - num)); 
}

latticePaths(4);