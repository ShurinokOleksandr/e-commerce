import Typography from '@/shared/ui/Typography/ui/Typography';
import Button from '@/shared/ui/Button/Button';
import Image from 'next/image';
import React from 'react';

export function ProductCart() {
    return (
        <div className="flex flex-col items-center px-6 py-2 border xl:hover:animate-wiggle">
            <div>
                <Image
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"
                    className=" object-cover"
                    height={170}
                    width={170}
                    alt="asi"
                />
            </div>
            <div>
                <Typography text="Field Roast Chao Cheese Creamy Original" className="font-semibold" size="xs" />
                <Typography text="Артиккул" size="xs" />
                <Typography text="In Stock" variant="stock" size="xs" />
                <Typography variant="hot" text="$ 43" size="md" />
                <Button variant="addCart" name="Добавить" size="full" />
            </div>
        </div>
    );
}
