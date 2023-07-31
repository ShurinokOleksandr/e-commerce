import Typography from '@/shared/ui/Typography/ui/Typography';
import React from 'react';

import { CheckboxFilter } from './CheckboxFilter';

interface CheckboxFilterListProps {
    name:string;
    listFilters:string[];
}

export function CheckboxFilterList({ listFilters, name }: CheckboxFilterListProps) {
    return (
        <div className="flex flex-col">
            <Typography text={name} />
            {
                listFilters.map((item) => (
                    <CheckboxFilter
                        filter={item}
                        key={item}
                    />
                ))
            }
        </div>
    );
}
