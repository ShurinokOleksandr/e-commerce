export async function getProductById(id:string) {
    try {
        const data = await fetch(`http://localhost:4000/computers/${id}`)
            .then((result) => result.json());
        return data;
    } catch (e) {
        console.log(e);
    }
    return [];
}
