// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import MobileViewLink from '@/components/Header/MobileViewLink';
import React from 'react';

export default async function Header() {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/marketplace', label: 'Marketplace' },
        { href: '/donate', label: 'Donate' },
        { href: '/cart', label: 'Cart & Orders' },
        { href: '/volunteer', label: 'Volunteer' },
        { href: '/collab', label: 'Collab' },
    ];

    return (
        <header className="w-full px-4 py-3 bg-primary-900 border-b border-amber-600 text-white font-poppins shadow-sm relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/triangle_logo.svg"
                        alt="Prayas-Sankalp logo"
                        width={55}
                        height={23}
                        style={{ width: '55px', height: 'auto' }}
                        priority
                    />
                    <h1 className="text-lg md:text-lg lg:text-lg font-medium">
                        Prayas-Sankalp
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-4 text-[10px] lg:text-sm font-medium overflow-hidden">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="nav-links capitalize"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <MobileViewLink />
            </div>
        </header>
    );
}
