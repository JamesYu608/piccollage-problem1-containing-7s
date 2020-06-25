function bruteForceCount (num, targetDigit) {
  let count = 0
  for (let i = 1; i <= num; i++) {
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
  bruteForceCount
}
