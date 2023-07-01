let some = prompt ('введите любое цифровое или буквенное значение')
let some1 = prompt ('Укажите максимальную длинну строки числом')

let result = some.length
let result1 = Number(some1)

if (result > result1) {
    let res = (some.slice(0, result1) + '…')
    console.log (res)
   }
   else {
    console.log (some)
   }
