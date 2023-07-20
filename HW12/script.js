const arrayBasic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
const arrayPositive = arrayBasic.splice(0, 10)
const arrayNegative = arrayBasic.splice(0, 5)
const res = arrayPositive.reduce((a, b) => a + b)
const res1 = arrayNegative.reduce((a, b) => a + b)

console.log(res, res1)