// app/layout.tsx or app/providers.tsx (depending on your setup)

'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
}
