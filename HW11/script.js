const array = [
    { key: 1, value: "a" },
    { key: 2, value: "b" },
    { key: 3, value: "c" }
]

const result = array.map(({ key, value }) => ({ [key]: value }));
console.log(result)