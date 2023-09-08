import CommentItem from '@/features/CommentSystem/ui/CommentItem';
import Typography from '@/shared/ui/Typography/ui/Typography';
import IconButton from '@/shared/ui/IconButton/IconButton';
import { HeartIcon } from '@heroicons/react/24/outline';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

function CommentBody() {
    return (
        <div>
            <div className="flex">
                <Typography
                    text="text of commet as da sda sd lorem1asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacommet as da sda sd lorem1asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacommet as da sda sd lorem1asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacommet as da sda sd lorem1asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacommet as da sda sd lorem1asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                />
                <div className="flex flex-col items-end  justify-between w-14 ">
                    <IconButton icon={<HeartIcon width={25} />} size="small" />
                    <Button variant="third" name="Скрыть" size="small" />
                </div>
                {/*     sadsadas */}
            </div>
            <div className="flex flex-col gap-y-10 p-4">
                {/* <CommentItem /> */}
                {/* <CommentItem /> */}
                {/* <CommentItem /> */}
            </div>
        </div>

    );
}

export default CommentBody;
