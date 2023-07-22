'use client';

import Typography from '@/shared/ui/Typography/ui/Typography';
import Button from '@/shared/ui/Button/Button';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductProps {
    id:number;
    name?:string
    price?:number;
    images?:string;
    in_stock ?:number
    className?:string;
    vendor_code?:string;
}

export function Product(props:ProductProps) {
    const {
        name = 'Название отсутсвует',
        images = ' ',
        vendor_code,
        className,
        in_stock,
        price,
        id,
    } = props;
    return (
        <div className={twMerge('w-full h-full flex-shrink-0 py-2 px-5 border xl:hover:animate-pulse', className)}>
            <Link href={`/product/${id}`}>
                <div className=" h-40 relative ">
                    <Image
                        className="w-full h-full rounded-tl-3xl rounded-br-3xl  rounded-bl-md rounded-tr-md  "
                        src={JSON.parse(images)[0] || ''}
                        alt="asi"
                        fill
                    />
                </div>
                <div className=" items-start  gap-y-2">
                    <Typography className="font-semibold truncate" text={name} size="sm" />
                    <Typography text={`Код:${vendor_code}`} size="xs" />
                    <Typography text={`В наличии: ${in_stock}`} variant="stock" size="xs" />
                    <Typography text={`$ ${price}`} variant="hot" size="md" />
                    <Button variant="addCart" name="Добавить" size="full" />
                </div>

            </Link>

        </div>
    );
}
