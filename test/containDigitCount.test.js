const { containDigitCount, bruteForceCount } = require('../index')

describe('[Function] containDigitCount', () => {
  describe('Validate results by comparing with results of brute force approach', () => {
    const inputs = generateInputs()
    const targetDigits = [1, 5, 7, 9]

    for (const targetDigit of targetDigits) {
      test(`targetDigit is ${targetDigit}`, () => {
        for (const input of inputs) {
          const expectedOutput = bruteForceCount(1, input, targetDigit)
          const output = containDigitCount(input, targetDigit)
          expect(output).toBe(expectedOutput)
        }
      })
    }

    function generateInputs () {
      const exampleCases = [
        7, 20, 70, 100
      ]
      const cornerCases = [
        1, 10, 100, 1000, 10000,
        7, 77, 777, 7777, 77777,
        9, 99, 999, 9999, 99999
      ]
      const randomCases = getRandomNumbers(1, 10000, 100)
      return [...exampleCases, ...cornerCases, ...randomCases]
    }

    function getRandomNumbers (min, max, count = 10) {
      const numbers = new Array(count)
      for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min)) + min
      }
      return numbers
    }
  })

  describe('Input is invalid, should return -1', () => {
    test('num is invalid', () => {
      const nums = [-1, 0, 1.5]
      for (const num of nums) {
        const output = containDigitCount(num, 7)
        expect(output).toBe(-1)
      }
    })

    test('targetDigit is invalid', () => {
      const targetDigits = [-1, 0, 10, 15, 1.5]
      for (const targetDigit of targetDigits) {
        const output = containDigitCount(100, targetDigit)
        expect(output).toBe(-1)
      }
    })
  })
})
