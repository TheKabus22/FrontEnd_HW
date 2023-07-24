const arrayBasic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
const arrayPositive = arrayBasic.filter((item) => { item > 0 })
const arrayNegative = arrayBasic.filter((item) => {return item <= 0 })
const res = arrayPositive.length
const res1 = arrayNegative.reduce((a, b) => a + b)

console.log(res, res1)