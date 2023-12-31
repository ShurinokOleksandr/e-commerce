import React from 'react';

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    );
}
