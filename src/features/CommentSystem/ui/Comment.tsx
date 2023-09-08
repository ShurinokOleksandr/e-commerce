'use client';

import CommentHeader from '@/features/CommentSystem/ui/CommentHeader';
import CommentBody from '@/features/CommentSystem/ui/CommentBody';
import CommentItem from '@/features/CommentSystem/ui/CommentItem';
import React, { useState } from 'react';

export function Comment() {
    const [child, setchild] = useState();
    return (
        <div className="flex flex-col gap-5">
            {/* <div className="flex border shadow-md"> */}
            {/*     <div className="  w-full py-2 px-5"> */}
            {/*         <CommentHeader /> */}
            {/*         <CommentBody /> */}
            {/*     </div> */}
            {/* </div> */}
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    );
}
