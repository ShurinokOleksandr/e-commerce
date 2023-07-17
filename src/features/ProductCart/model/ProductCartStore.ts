import { create } from 'zustand';

interface BearState {
    count: number;
    increase: (by: number) => void
}

export const useProductCartStore = create<BearState>()((set) => ({
    increase: (by) => set((state) => ({ count: state.count + by })),
    count: 0,
}));
