async function getData() {

    try {
        let res = await fetch('https://jsonplaceholder.typicode.con/posts')
        console.log(res);
        if (!res.ok) {
            throw new Error ('Failed to request');
        }
        const data = await res.json();
        console.log(data);

    } catch (e) { console.log(e) };
}

getData()
