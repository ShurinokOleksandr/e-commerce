import Typography from '@/shared/ui/Typography/ui/Typography';
import { BugAntIcon } from '@heroicons/react/24/outline';
import React from 'react';

export function NotFoundItems() {
    return (
        <div className="flex m-10 flex-col items-center justify-center">
            <BugAntIcon width={100} />
            <Typography text="Товаров нету..." variant="hot" size="lg" />
        </div>
    );
}
