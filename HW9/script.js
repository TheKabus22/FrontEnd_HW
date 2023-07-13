// ```Arrays```

// ---Array 1---

// const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
// const result = users.every(item => item.length > 4)
// console.log(result)

// ---Array 2---

// const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
// const result = users.some(item => item.length > 4)
// console.log(result)

// ---Array 3---

const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
const result = users.map((item) => item.toUpperCase())
console.log('Array', users)
console.log('New array', result)