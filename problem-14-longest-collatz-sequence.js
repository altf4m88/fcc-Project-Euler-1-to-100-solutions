function longestCollatzSequence(limit) {

  let currentLongestNum = 1;
  let currentLongestLength = 0;
  for (let i = 1; i < limit; i++) {
    let current = i;
    
    let sequenceNumbers = [];
    while (current !== 1) {
      if (current % 2 === 0) {
        current = evenCalculation(current);
      } else {
        current = oddCalculation(current);
      }
      sequenceNumbers.push(current); 
    }
    
    if (sequenceNumbers.length > currentLongestLength) {
      currentLongestLength = sequenceNumbers.length;
      currentLongestNum = i;
    }
  }

  return currentLongestNum;
}

function evenCalculation(n) {
  return n / 2;
}

function oddCalculation(n) {
  return (3 * n) + 1;
}

longestCollatzSequence(14);