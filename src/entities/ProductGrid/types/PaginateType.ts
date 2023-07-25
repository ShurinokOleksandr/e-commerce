import { ProductType } from '@/entities/Product/types/Product';

export type Paginate = {
    rows:ProductType[]
    count:number
};
