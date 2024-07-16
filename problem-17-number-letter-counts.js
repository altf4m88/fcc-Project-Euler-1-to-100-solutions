function numberLetterCounts(limit) {
  let numberArray = [];
  for (let i = 1; i <= limit; i++) {
    numberArray.push(numberToWords(i))  
  }

  return numberArray.join('').replace(/\s+/g, '').length;
}

function numberToWords(num) {
    if (num === 0) return 'Zero';

    const under20 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
                    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 
                    'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    function toWords(s) {
        if (s < 20) return under20[s - 1];
        else if (s < 100) return tens[Math.floor(s / 10)] + (s % 10 === 0 ? "" : " " + under20[s % 10 - 1]);
        else if (s < 1000) return under20[Math.floor(s / 100) - 1] + ' Hundred' + (s % 100 === 0 ? "" : " and " + toWords(s % 100));
        for (let i = 0; i < thousands.length; i++) {
            const divisor = Math.pow(1000, i + 1);
            if (s < divisor) return toWords(Math.floor(s / Math.pow(1000, i))) + ' ' + thousands[i] + (s % Math.pow(1000, i) === 0 ? "" : ", " + toWords(s % Math.pow(1000, i)));
        }
    }

    return toWords(num);
}

numberLetterCounts(150);