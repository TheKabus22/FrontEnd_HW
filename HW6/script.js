// ---FUNCTION 1---
// let one = prompt('Enter the first number')
// let two = prompt('Enter the second number')
// function maxNumber(a, b) {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// }
// const result = maxNumber(one, two)
// console.log(result)

// ---FUNCTION 2---

// let a = prompt('Enter your age')
// function checkAge(age) {
//     if (age > 18) {
//         return true
//     } else {
//         return false
//     }
// }
// const result = checkAge(a)
// console.log(result)

// ---FUNCTION 3---

// let some = prompt ('введите любое цифровое или буквенное значение')
// let some1 = prompt ('Укажите максимальную длинну строки числом')

// function sliceString (one, two) {
//  let result = one.length
// let result1 = Number(two)
// if (result > result1) {
//     let res = (some.slice(0, result1) + '…')
//     console.log (res)
//    }
//    else {
//     console.log (some)
//    }
// }
// sliceString (some,some1)

// ---FUNCTION 4---

let str = prompt('Enter the word')
let res = str.toLowerCase()
function checkWord(a) {
    if (a === 'word') {
        return true
    } else {
        return false
    }
}
let result = checkWord(res)

console.log(result)