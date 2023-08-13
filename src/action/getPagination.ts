import { useProductStore } from '@/entities/ProductGrid/model/store';
import { SearchParams } from '@/shared/types/SearchParams';

export async function getPagination(obj:SearchParams) {
    const offset = obj.offset ? `offset=${obj.offset}` : 'offset=0';
    const pc = obj.pc ? `&pc=${obj.pc}` : '';
    const parts = obj.parts ? `&parts=${obj.parts}` : '';
    const sortBy = obj.sortBy ? `&sortBy=${obj.sortBy}` : '';
    try {
        const data = await fetch(`http://localhost:4000/computers?limit=20&${offset}${pc}${parts}${sortBy}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((dat) => dat.json());
        const state = useProductStore.getState().ProductItems;
        useProductStore.setState({ ProductItems: data });
    } catch (e) {
        console.log(e);
    }
    return null;
}
