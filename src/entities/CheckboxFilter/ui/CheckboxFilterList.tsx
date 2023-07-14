import Typography from '@/shared/ui/Typography/ui/Typography';
import React from 'react';

import { CheckboxFilter } from './CheckboxFilter';

interface CheckboxFilterListProps {
    listFilters:string[];
    name:string;
}

export function CheckboxFilterList({ listFilters, name }: CheckboxFilterListProps) {
    return (
        <div className="flex flex-col">
            <Typography text={name} />
            {
                listFilters.map((item) => (
                    <CheckboxFilter
                        filter={item}
                    />
                ))
            }
        </div>
    );
}
