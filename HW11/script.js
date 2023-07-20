const array1 = [
    { key: 1, value: "a" },
    { key: 2, value: "b" },
    { key: 3, value: "c" }
]

const result = array1.map(({ key, value }) => ({ [key]: value }));
console.log(result) 