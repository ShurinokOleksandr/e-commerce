import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

export function Pagination() {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index: number) => ({
        color: active === index ? 'blue' : 'blue-gray',
        variant: active === index ? 'filled' : 'text',
        onClick: () => setActive(index),
    } as any);

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                className="flex items-center gap-2"
                disabled={active === 1}
                variant="primary"
                color="blue-gray"
                onClick={prev}
            >
                <ArrowLeftIcon className="h-4 w-4" strokeWidth={2} />
                {' '}
                Previous
            </Button>
            <div className="flex items-center gap-2">
                <Button {...getItemProps(1)}>1</Button>
                <Button {...getItemProps(2)}>2</Button>
                <Button {...getItemProps(3)}>3</Button>
                <Button {...getItemProps(4)}>4</Button>
                <Button {...getItemProps(5)}>5</Button>
            </div>
            <Button
                className="flex items-center gap-2"
                disabled={active === 5}
                variant="primary"
                color="blue-gray"
                onClick={next}
            >
                Next
                <ArrowRightIcon className="h-4 w-4" strokeWidth={2} />
            </Button>
        </div>
    );
}
