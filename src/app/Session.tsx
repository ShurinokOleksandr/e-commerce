'use client';

import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}
function Session({ children }: Props) {
    return <SessionProvider baseUrl="http://localhost:3000/">{children}</SessionProvider>;
}

export default Session;
