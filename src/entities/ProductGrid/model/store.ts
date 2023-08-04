import { immer } from 'zustand/middleware/immer';
import { ProductType } from '@/entities/Product';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface useProductStoreType {
    ProductItems: ProductType[],
    setProductItems: (data: ProductType[]) => void;
}
export const useProductStore = create(immer(devtools<useProductStoreType>((set) => ({
    setProductItems: (data) => set({ ProductItems: data }),
    ProductItems: [],
}))));
