'use client';

import { CheckboxFilterList, partsManufactures, pcManufactures } from '@/entities/CheckboxFilter';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/shared/ui/Button/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

export type Inputs = {
    Parts: string[],
    Pc: string[],
};
export function FormFilterProducts() {
    const {
        formState: { errors }, handleSubmit, register, reset,
    } = useForm<Inputs>();
    const router = useRouter();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const pc = data.Pc ? `&pc=${data.Pc.join(',')}` : '';
        const parts = data.Parts ? `&parts=${data.Parts.join(',')}` : '';
        router.push(`/product?offset=0${pc}${parts}`);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-10">
                <CheckboxFilterList
                    stateInput={{ ...register('Pc') }}
                    listFilters={pcManufactures}
                    name="Категория товаров"
                />
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/* <MultiRangeSlider max={100} min={0} /> */}
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
