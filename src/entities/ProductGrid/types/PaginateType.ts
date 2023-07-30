import { ProductType } from '@/entities/Product/types/Product';

export type ProductResponse = {
    rows:ProductType[]
    count:number
};
