export async function getPagination(offset:number = 0) {
    try {
        const data = await fetch(`http://localhost:4000/computers?limit=20&offset=${offset}`);
        return await data.json();
    } catch (e) {
        console.log(e);
    }
    return null;
}
