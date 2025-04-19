function reverseNumber(num) {
  const isNegative = num < 0;
  const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''), 10);
  return isNegative ? -reversed : reversed;
}
