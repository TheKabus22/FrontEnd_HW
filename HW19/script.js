async function getData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data)
}

getData()
