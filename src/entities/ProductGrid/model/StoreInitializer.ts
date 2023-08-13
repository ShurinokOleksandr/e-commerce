'use client';

import { ProductResponse } from '@/entities/ProductGrid/types/PaginateType';
import { useProductStore } from '@/entities/ProductGrid/model/store';
import { useRef } from 'react';

function StoreInitializer({ products }: { products:ProductResponse }) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useProductStore.setState({ ProductItems: products });
        initialized.current = true;
    }
    return null;
}

export default StoreInitializer;
