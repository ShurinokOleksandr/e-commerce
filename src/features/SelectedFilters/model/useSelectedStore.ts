import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface useSelectedStoreType {
    selectedItems:string[]
    removeItem: (name:string) => void
    setSelectedItem: (data:string[]) => void
}
export const useSelectedStore = create(immer(devtools<useSelectedStoreType>((set) => ({
    removeItem: (name) => set((state) => ({ selectedItems: state.selectedItems.filter((item) => item !== name) })),
    setSelectedItem: (data) => set({ selectedItems: data }),
    selectedItems: [],
}))));
