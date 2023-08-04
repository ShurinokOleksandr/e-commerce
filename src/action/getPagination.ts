import { SearchParams } from '@/shared/types/SearchParams';

export async function getPagination(obj:SearchParams) {
    const offset = obj.offset ? `offset=${obj.offset}` : 'offset=0';
    const pc = obj.pc ? `&pc=${obj.pc}` : '';
    const parts = obj.parts ? `&parts=${obj.parts}` : '';

    try {
        const data = await fetch(`http://localhost:4000/computers?limit=20&${offset}${pc}${parts}`);
        return await data.json();
    } catch (e) {
        console.log(e);
    }
    return null;
}
