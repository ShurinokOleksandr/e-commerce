import { immer } from 'zustand/middleware/immer';
import { ProductType } from '@/entities/Product';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface useSearchStoreType {
    searchInput: string,
    searchItems: ProductType[],
    setSearchInput: (value: string) => void;
    setSearchItems: (data: ProductType[]) => void;
}
export const useSearchStore = create(immer(devtools<useSearchStoreType>((set) => ({
    setSearchInput: (value) => set({ searchInput: value }),
    setSearchItems: (data) => set({ searchItems: data }),
    searchInput: '',
    searchItems: [],
}))));
