export async function getBestsellers(count:number) {
    try {
        const data = await fetch(`http://localhost:4000/computers/bestsellers/${count}`)
            .then((result) => result.json());
        return data;
    } catch (e) {
        console.log(e);
    }
    return [];
}
