import React from 'react';
import Header from '@/components/Header/Header';

export default function InnerRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
