import Typography from '@/shared/ui/Typography/ui/Typography';
import React from 'react';

import { CheckboxFilter } from './CheckboxFilter';

interface CheckboxFilterListProps {
    name:string;
    stateInput: any
    listFilters:string[];
}

export function CheckboxFilterList({ listFilters, stateInput, name }: CheckboxFilterListProps) {
    return (
        <div className="flex flex-col">
            <Typography text={name} />
            {
                listFilters.map((item) => (
                    <CheckboxFilter
                        stateInput={stateInput}
                        filter={item}
                        key={item}
                    />
                ))
            }
        </div>
    );
}
