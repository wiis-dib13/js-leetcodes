function plusOne(digits) {
  let k = digits.length - 1;

  for (let i = k; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0; 
  }


  digits.unshift(1);
  return digits;
}
