const {
  bruteForceCount, // brute force approach
  containDigitCount // effective approach
} = require('./index')

// Containing 7s, g(1000)
console.log(bruteForceCount(1, 1000, 7)) // 271
console.log(containDigitCount(1000, 7)) // 271

// Containing 3s, g(199)
console.log(bruteForceCount(1, 199, 7)) // 38
console.log(containDigitCount(199, 7)) // 38
