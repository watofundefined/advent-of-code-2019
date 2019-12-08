const {isNotDecreasing} = require('../a/impl');

function numberOfPossiblePasswords(min, max) {
  const passwords = [];
  for (let num = min; num <= max; num++) {
    if (isNotDecreasing(num) && hasExactlyTwoSameNeigbourDigits(num)) {
      passwords.push(num);
    }
  }

  return passwords.length;
}

function hasExactlyTwoSameNeigbourDigits(num) {
  const digits = num.toString().split('');

  for (let i = 0; i < digits.length - 1; ) {
    for (let j = i + 1; j < digits.length; j++) {
      if (digits[i] != digits[i + 1]) {
        i++;
        break;
      }

      if (digits[i + 1] != digits[i + 2]) return true;

      if (digits[j] == digits[j + 1]) continue;

      i += j - i;
    }
  }

  return false;
}

exports.numberOfPossiblePasswords = numberOfPossiblePasswords;
exports.hasExactlyTwoSameNeigbourDigits = hasExactlyTwoSameNeigbourDigits;
