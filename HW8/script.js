// ```Arrays```

// ---Array 1---

// const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6',100]
// let users1 = []
// const check = item => {
//     if (typeof item === 'string') {
//         users1.push (item+'-hi') // Сделал так чтобы видеть что каждый элемент прошел проверку, для наглядности
//     }
// }
// users.forEach(check)
// console.log(users1)

// ---Array 2---

// const usersArray = [5, 12, 8, 130, 44];
// const searchValue = 5

// function SearchValueInArray(array, searchElement) {
//     if (array.find(element => element === searchElement)) {
//         return true
//     } else {
//         return false
//     }
// }
// const result = SearchValueInArray(usersArray, searchValue)

// console.log(result);

// ---Array 3---

// const users = ['user', 'user1', 'user10', 'user100', 'user1000']
// function checkLength (array) {
//     const res = array.find(element => element.length>4)
//     return res
// }
// const result = checkLength(users)
// console.log (result)

// ---Array 4---

const users = ['user', 'user1', 'user10', 'user100', 'user1000']
let users1 = []
function checkLength (array) {
    const res = array.filter(element => element.length>4)
    return res
}
const result = checkLength(users)
console.log (result)