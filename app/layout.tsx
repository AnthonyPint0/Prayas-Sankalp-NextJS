import React from 'react';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import { Providers } from './providers';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
});
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'Prayas Sankalp',
    description:
        'Prayas Sankalp is a platform where you can donate and be appreciated for the same too.',
    icons: '/favicon.ico',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full w-full">
            <body
                className={`h-full w-full bg-primary-10 bg-[url('/BG_T.svg')] bg-contain bg-repeat grid grid-rows-[1fr_auto] ${inter.className} ${poppins.variable}`}
            >
                <main className="h-full">
                    <Providers>{children}</Providers>
                </main>
                <Footer />
            </body>
        </html>
    );
}
