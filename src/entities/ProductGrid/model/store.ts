import { immer } from 'zustand/middleware/immer';
import { ProductType } from '@/entities/Product';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface useGridItemsType {
    gridItems: ProductType[]
    setGridItems: (data: ProductType[]) => void;
}
export const useGridItemsStore = create(immer(devtools<useGridItemsType>((set) => ({
    setGridItems: (data) => set((state) => ({ gridItems: [...state, ...data] })),
    gridItems: [],
}))));
