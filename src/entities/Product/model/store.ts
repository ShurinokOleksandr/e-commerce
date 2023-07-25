import { ProductType } from '@/entities/Product/types/Product';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

export interface ProductCart extends ProductType {
    count:number;
}
interface CartState {
    sum:number;
    items:ProductCart[],
}

type Actions = {
    addToCart: (item:ProductCart) => void
    removeFromCart: (id:number) => void
    decrementItem:(id:number) => void
    incrementItem:(id:number) => void
    sumAllItems:() => void
    removeAll:() => void
};
//
export const useCartStore = create(
    devtools(immer<CartState & Actions>((set) => ({
        addToCart: (item:ProductCart) => set((state) => {
            const findCart = state.items.findIndex((cart) => cart.id === item.id);
            if (findCart === -1) {
                const newCart = [...state.items, item];
                return { items: newCart };
            }
            const updatedItem = state.items.reduce((acc:ProductCart[], v:ProductCart) => (item.id === v.id ? ([...acc, {
                ...v,
                count: v.count += 1,
            }]) : ([...acc, v])), []);
        }),
        incrementItem: (id) => set((state) => {
            state.items.reduce((acc:ProductCart[], v:ProductCart) => ([...acc, { ...v, count: v.id === id ? v.count += 1 : v.count }]), []);
        }),
        decrementItem: (id) => set((state) => {
            state.items.reduce((acc:ProductCart[], v:ProductCart) => ([...acc, { ...v, count: v.id === id ? v.count -= 1 : v.count }]), []);
        }),
        removeFromCart: (id) => set((state) => ({ items: state.items.reduce((acc:ProductCart[], v:ProductCart) => (v.id === id ? ([...acc]) : ([...acc, v])), []) })),
        sumAllItems: () => set((state) => ({ sum: state.items.reduce((acc:number, v:ProductCart) => acc += (v.count * v.price), 0) })),
        removeAll: () => set((state) => ({ items: state.items.reduce((acc) => [...acc], []) })),
        items: [],
        sum: 0,
    }))),
);
