const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
let count = 0
const container = document.querySelector('.buttonContainer')
const handleContainerClick = (e) => {
    const eventName = e.target.dataset.action;
    if (eventName) {
    switch (eventName) {
        case 'decrease':
            count -= 1;
            break;
        case 'reset':
            count = 0;
            break;
        case 'increase':
            count += 1;
            break;
        default:
            return;
    }
    value.innerHTML = count;
}}

container.addEventListener('click', handleContainerClick)