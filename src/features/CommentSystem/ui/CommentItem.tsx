import CommentHeader from '@/features/CommentSystem/ui/CommentHeader';
import CommentBody from '@/features/CommentSystem/ui/CommentBody';
import React from 'react';

function CommentItem() {
    return (
        <div className="flex border shadow-md">
            <div className="  w-full py-2 px-5">
                <CommentHeader />
                <CommentBody />
            </div>
        </div>
    );
}

export default CommentItem;
