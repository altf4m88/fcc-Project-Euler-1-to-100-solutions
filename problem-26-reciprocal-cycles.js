function reciprocalCycles(n) {
  
  let highestReciprocalCycleNum = 0;
  for (let i = 1; i < n; i++) {
    let cycleLength = findRecurringCycleLength(i);
    if (cycleLength > highestReciprocalCycleNum) {
      highestReciprocalCycleNum = i;
    }
  }

  return highestReciprocalCycleNum;
}

function findRecurringCycleLength(d) {
    let remainders = {};
    let numerator = 1;
    let position = 0;

    while (numerator !== 0) {
        if (remainders.hasOwnProperty(numerator)) {
            return position - remainders[numerator];
        }
        remainders[numerator] = position;
        numerator = (numerator * 10) % d;
        position += 1;
    }

    return 0;
}


reciprocalCycles(1000);