function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 let a = 1;
 while (a < sumOfabc) {
   let b = a;
   while (b < sumOfabc) {
     let c = n - a - b;
     if (c !== 0) {
       if ((c * c) == (a * a) + (b * b)) {
         return a * b * c;
       }
     }
     b++;
   }
   a++;
 }
}

console.log(specialPythagoreanTriplet(120));