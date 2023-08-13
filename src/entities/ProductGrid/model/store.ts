import { ProductResponse } from '@/entities/ProductGrid/types/PaginateType';
import { immer } from 'zustand/middleware/immer';
import { ProductType } from '@/entities/Product';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface useProductStoreType {
    paginate:number;
    ProductItems: ProductResponse;
    setPaginate: (data: number) => void;
    setProductItems: (data: ProductResponse) => void;
}
export const useProductStore = create(immer(devtools<useProductStoreType>((set) => ({
    setProductItems: (data) => set({ ProductItems: data }),
    setPaginate: (data) => set({ paginate: data }),
    ProductItems: { rows: [], count: 0 },
    paginate: 0,
}))));
