import Typography from '@/shared/ui/Typography/ui/Typography';
import Button from '@/shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import React from 'react';

interface ProductProps {
    name?:string
    price?:number;
    images?:string;
    in_stock ?:number
    className?:string;
    vendor_code?:string;
}

export function Product({
    vendor_code, name = 's', className, in_stock, images, price,
}:ProductProps) {
    return (
        <div className={twMerge(className, 'w-[  py-2 px-5 border xl:hover:animate-pulse')}>
            <div className=" h-40 relative ">
                <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                    className="w-full h-full rounded-tl-3xl rounded-br-3xl  rounded-bl-md rounded-tr-md  "
                    alt="asi"
                    fill
                />
            </div>
            <div className=" items-start  gap-y-2">
                <Typography className="font-semibold" text={name} size="sm" />
                <Typography text={`Код:${vendor_code}`} size="xs" />
                <Typography text={`В наличии :${in_stock}`} variant="stock" size="xs" />
                <Typography text={`$ ${price}`} variant="hot" size="md" />
                <Button variant="addCart" name="Добавить" size="full" />
            </div>

        </div>
    );
}
