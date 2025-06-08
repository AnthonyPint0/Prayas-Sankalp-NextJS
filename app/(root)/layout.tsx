import React from 'react';

export default function InnerRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<><Heade{ children }</>);
}
