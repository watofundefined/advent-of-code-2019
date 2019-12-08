function numberOfPossiblePasswords(min, max) {
  const passwords = [];
  for (let num = min; num <= max; num++) {
    if (isNotDecreasing(num) && hasAtLeastTwoSameNeighbourDigits(num)) {
      passwords.push(num);
    }
  }

  return passwords.length;
}

function isNotDecreasing(num) {
  const digits = num.toString().split('');
  let max = -Infinity;

  for (let digit of digits) {
    if (digit < max) return false;

    max = digit;
  }

  return true;
}

function hasAtLeastTwoSameNeighbourDigits(num) {
  const digits = num.toString().split('');

  let lastDigit = digits[0];
  for (let i = 1; i < digits.length; i++) {
    if (lastDigit == digits[i]) {
      return true;
    }

    lastDigit = digits[i];
  }

  return false;
}

exports.numberOfPossiblePasswords = numberOfPossiblePasswords;
exports.isNotDecreasing = isNotDecreasing;
exports.hasAtLeastTwoSameNeighbourDigits = hasAtLeastTwoSameNeighbourDigits;
