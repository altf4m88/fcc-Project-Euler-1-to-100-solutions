function multiplesOf3and5(number) {

  let multiplesOf3 = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      multiplesOf3.push(i);
    }
  }


  let multiplesOf5 = [];
  for (let i = 1; i < number; i++) {
    if (i % 5 === 0) {
      multiplesOf5.push(i);
    }
  }

  let mergedArray = Array.from(new Set([...multiplesOf3, ...multiplesOf5]));

  return mergedArray.reduce((sum, current) => sum + current, 0);
}

console.log(multiplesOf3and5(49));