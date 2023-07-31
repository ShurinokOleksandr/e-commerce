export async function getSearch(name:string) {
    try {
        const data = await fetch('http://localhost:4000/computers/search', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
            method: 'POST',
        });
        return await data.json();
    } catch (e) {
        console.log(e);
    }
    return null;
}
