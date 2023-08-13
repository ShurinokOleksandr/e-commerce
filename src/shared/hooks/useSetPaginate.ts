import { useProductStore } from '@/entities/ProductGrid/model/store';
import { useRouter } from 'next/navigation';

export const useSetPaginate = () => {
    const setPaginate = useProductStore((state) => state.setPaginate);
    const router = useRouter();
    return (url:string) => {
        setPaginate(0);
        router.push(url);
    };
};
