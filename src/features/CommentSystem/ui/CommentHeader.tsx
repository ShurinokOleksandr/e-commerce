import { ArrowUturnDownIcon } from '@heroicons/react/24/outline';
import Typography from '@/shared/ui/Typography/ui/Typography';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

function CommentHeader() {
    return (
        <div className="flex w-full items-center justify-between mb-2 ">
            <div className="flex gap-5 items-center ">
                <Avatar />
                <Typography className="text-base" variant="semibold" text="Name come" />
                <Typography text="3 min ago" />
            </div>
            <div>
                <Button
                    icon={<ArrowUturnDownIcon className="rotate-90 " stroke="blue" width={20} />}
                    className="text-blue-600 w-50"
                    title="Ответить"
                    name="Ответить"
                    variant="none"
                    position
                />
            </div>
        </div>
    );
}

export default CommentHeader;
