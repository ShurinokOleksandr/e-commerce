export async function getNewItems(count:number) {
    try {
        const data = await fetch(`http://localhost:4000/computers/new/${count}`)
            .then((result) => result.json());
        return data;
    } catch (e) {
        console.log(e);
    }
    return [];
}
