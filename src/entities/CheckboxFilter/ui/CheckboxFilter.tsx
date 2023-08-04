import Typography from '@/shared/ui/Typography/ui/Typography';
import React from 'react';

interface CheckboxFilterProps {
    filter:string;
    stateInput: any

}

export function CheckboxFilter({ stateInput, filter }:CheckboxFilterProps) {
    return (

        <div className="flex items-center justify-start">
            <input
                className="accent-emerald-500/25 h-4 w-4 mr-4"
                type="checkbox"
                {...stateInput}
                value={filter}
                id={filter}
            />
            <Typography
                variant="primary"
                text={filter}
                size="sm"
            />
        </div>

    );
}
