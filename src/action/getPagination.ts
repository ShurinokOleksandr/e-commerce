export async function getPagination(offset:number = 0) {
    try {
        const data = await fetch(`http://localhost:4000/computers?limit=16&offset=${offset}`)
            .then((result) => result.json());
        return data;
    } catch (e) {
        console.log(e);
    }
    return null;
}
