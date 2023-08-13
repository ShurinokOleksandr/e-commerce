import { useProductStore } from '@/entities/ProductGrid/model/store';
import { useRouter } from 'next/navigation';

export const useSetPaginate = () => {
    const setPaginate = useProductStore((state) => state.setPaginate);
    const router = useRouter();
    return (url:string, value?:number) => {
        setPaginate(value || 0);
        router.push(url);
    };
};
