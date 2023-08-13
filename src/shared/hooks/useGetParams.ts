import { useSearchParams } from 'next/navigation';

export const useGetParams = () => {
    const searchParams = useSearchParams();

    const pc = searchParams.get('pc') !== null ? `&pc=${searchParams.get('pc')}` : '';
    const parts = searchParams.get('parts') !== null ? `&parts=${searchParams.get('parts')}` : '';
    const sort = searchParams?.get('sortBy') ? `&sortBy=${searchParams?.get('sortBy')}` : '';
    return {
        parts,
        sort,
        pc,
    };
};
