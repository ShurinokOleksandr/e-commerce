import React from 'react';

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="max-w-[1140px] w-[90%] xl:max-w-[1300px] xl:w-[90%] mx-auto">
            {children}
        </main>
    );
}
