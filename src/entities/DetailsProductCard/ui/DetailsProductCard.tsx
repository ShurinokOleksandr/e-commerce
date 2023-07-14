import Typography from '@/shared/ui/Typography/ui/Typography';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

export function DetailsProductCard() {
    return (
        <div className="">
            <div className="flex flex-col gap-y-3  ">
                <Typography text="Name product" size="md" />
                <div className="flex gap-2 divide-x-2">
                    <Typography text={`Name brand: ${'as'}`} size="xs" />
                    <div className="flex px-2">
                        <Typography className="font-semibold" text="Articular code:" size="xs" />
                        <Typography text="as" size="xs" />
                    </div>
                </div>
                <Typography variant="hot" text="$131" size="lg" />
                <Typography variant="stock" text="stoc" size="xs" />
                <Button name="Добавить в корзину" variant="addCart" />
            </div>

        </div>
    );
}
