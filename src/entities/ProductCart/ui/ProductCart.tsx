import React from 'react';
import Image from 'next/image';
import Typography from '@/shared/ui/Typography/ui/Typography';
import Button from '@/shared/ui/Button/Button';

export function ProductCart() {
    return (
        <div className="flex flex-col items-center px-6 py-2 border xl:hover:animate-wiggle">
            <div>
                <Image
                    className=" object-cover"
                    width={170}
                    height={170}
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                    alt="asi"
                />
            </div>
            <div>
                <Typography size="sm" text="Field Roast Chao Cheese Creamy Original" />
                <Typography size="xs" variant="stock" text="In Stock" />
                <Typography size="md" variant="hot" text="$ 43" />
                <Button name="Добавить" size="small" variant="addCart" />
            </div>
        </div>
    );
}
