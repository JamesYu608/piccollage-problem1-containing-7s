function containDigitCount (num, targetDigit) {
  if (!isValidInput(num, targetDigit)) {
    return -1
  }

  // Quick return when number < 10
  // e.g. targetDigit: 7, g(1 ~ 6) = 0, g(7 ~ 9) = 1
  if (num < 10) {
    return num < targetDigit ? 0 : 1
  }

  const numStr = num.toString()
  // Calculate count of numbers contain targetDigit, from 0 ~ 10^(numStr.length - 1) - 1
  // e.g.
  // number: 17, count g(0 ~ 9) = 1
  // number: 128, count g(0 ~ 99) = 19
  const preCalculatedCount = countByNumLength(numStr.length)

  // e.g. 17 => base: 10, 128 => base: 100
  const base = 10 ** (numStr.length - 1)
  const leadDigit = Math.floor(num / base)
  // e.g. 28 => start: 20, 328 => start: 300
  const start = leadDigit * base
  if (leadDigit <= targetDigit) {
    // e.g. "5"28, targetDigit: 7
    // 1 ~ 499: leadDigit * preCalculatedCount
    //   - leadDigit: 5 (0, 1, 2, 3, 4)
    //   - preCalculatedCount: g(0 ~ 99)
    // 500 ~ 528: bruteForceCount(500, 528, targetDigit)
    return leadDigit * preCalculatedCount + bruteForceCount(start, num, targetDigit)
  } else {
    // e.g. "9"28, targetDigit: 7
    // 1 ~ 699, 800 ~ 899: (leadDigit - 1) * preCalculatedCount
    //   - leadDigit - 1: 8 (0, 1, 2, 3, 4, 5, 6, 8)
    //   - preCalculatedCount: g(0 ~ 99)
    // 700 ~ 799: base
    // 900 ~ 928: bruteForceCount(900, 928, targetDigit)
    return (leadDigit - 1) * preCalculatedCount + base + bruteForceCount(start, num, targetDigit)
  }
}

function isValidInput (num, targetDigit) {
  if (!Number.isInteger(num) || !Number.isInteger(targetDigit)) {
    return false
  }
  return num > 0 && targetDigit > 0 && targetDigit < 10
}

// start from g(0 ~ 9) = 1
// g(0 ~ 99) = g(0 ~ 9) * 9 + 10 = 19
// e.g. targetDigit: 7
// *9 => leadDigit could be: 0 ~ 6, 8 ~ 9 (9)
// +10 => when leadDigit is 7, numbers: 70 ~ 79 (10)
function countByNumLength (length) {
  let count = 1
  for (let digitLength = 2; digitLength < length; digitLength++) {
    count = count * 9 + 10 ** (digitLength - 1)
  }
  return count
}

function bruteForceCount (start, end, targetDigit) {
  let count = 0
  for (let i = start; i <= end; i++) {
    let currNum = i
    while (currNum !== 0) {
      if (currNum % 10 === targetDigit) {
        count++
        break
      }
      currNum = Math.floor(currNum / 10)
    }
  }
  return count
}

module.exports = {
  bruteForceCount,
  containDigitCount
}
