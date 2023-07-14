async function getLol(id:string) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json());
    return data;
}
export default getLol;
