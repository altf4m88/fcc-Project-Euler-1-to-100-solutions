function largestPalindromeProduct(n) {

  let placeholderString = '';
  for (let i = 1; i <= n ; i++) {
    placeholderString += '9';
  }

  let maxDigitNum = parseInt(placeholderString);
  
  let currentHighestPalindrome = 0;
  for (let i = maxDigitNum; i > 1; i--) {
    for (let j = maxDigitNum; j > 1; j--) {
      let multiplicationProduct = i * j;

      if (currentHighestPalindrome > multiplicationProduct) {
        continue;
      }

      let productToString = multiplicationProduct.toString();

      let string1 = productToString;
      let string2 = productToString.split('').reverse().join('');

      if (string1 === string2) {
        currentHighestPalindrome = parseInt(multiplicationProduct); 
      }
    }
  }

  return currentHighestPalindrome;
}

console.log(largestPalindromeProduct(3));