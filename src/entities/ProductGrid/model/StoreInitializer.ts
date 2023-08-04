'use client';

import { useProductStore } from '@/entities/ProductGrid/model/store';
import { ProductType } from '@/entities/Product';
import { useRef } from 'react';

function StoreInitializer({ products }: { products:ProductType[] }) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useProductStore.setState({ ProductItems: products });
        initialized.current = true;
    }
    return null;
}

export default StoreInitializer;
