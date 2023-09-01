'use client';

import { CheckboxFilterList, partsManufactures, pcManufactures } from '@/entities/CheckboxFilter';
import { useSelectedStore } from '@/features/SelectedFilters/model/useSelectedStore';
import { useProductStore } from '@/entities/ProductGrid/model/store';
import { useGetParams } from '@/shared/hooks/useGetParams';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

export type Inputs = {
    Parts: string[],
    Pc: string[],
};
export function FormFilterProducts() {
    const setSelectedItem = useSelectedStore((state) => state.setSelectedItem);
    const {
        formState: { errors }, handleSubmit, register, reset,
    } = useForm<Inputs>();
    const router = useRouter();
    const { sort } = useGetParams();
    const setPaginate = useProductStore((state) => state.setPaginate);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setPaginate(0);
        const pc = data.Pc ? `&pc=${data.Pc.join(',')}` : '';
        const parts = data.Parts ? `&parts=${data.Parts.join(',')}` : '';
        const dataPc = data?.Pc || [];
        const dataParts = data?.Parts || [];
        router.push(`/product?offset=0${pc}${parts}${sort}`);
        setSelectedItem([...dataPc, ...dataParts]);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-10">
                <CheckboxFilterList
                    stateInput={{ ...register('Pc') }}
                    listFilters={pcManufactures}
                    name="Категория товаров"
                />
                <CheckboxFilterList
                    stateInput={{ ...register('Parts') }}
                    listFilters={partsManufactures}
                    name="Категория запчастей"
                />
            </div>
            <div className="flex flex-col my-2 gap-y-2">
                <Button name="Поиск товаров" variant="addCart" type="submit" />
                <Button onClick={() => reset()} name="Сбросить фильтры" variant="addCart" />
            </div>
        </form>
    );
}
