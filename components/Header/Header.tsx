// components/Header.tsx (Server Component)
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { User } from 'lucide-react';
import MobileViewLink from '@/components/MobileViewLink';
import { signOut } from 'next-auth/react';

export default async function Header() {
    const session = await getServerSession(authOptions);

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
                        width={40}
                        height={23}
                        priority
                    />
                    <h1 className="text-lg md:text-2xl font-medium">
                        Prayas-Sankalp
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
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

                {/* Auth / Profile */}
                <div className="hidden md:flex gap-4 items-center">
                    {session?.user ? (
                        <>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 text-sm rounded-md">
                                <User size={18} />
                                <span>
                                    {session.user.name || session.user.email}
                                </span>
                            </div>
                            <form
                                action={async () => {
                                    'use server';

                                    await signOut();
                                }}
                            >
                                <button type="submit">Logout</button>
                            </form>
                        </>
                    ) : (
                        <MobileViewLink session={session} />
                    )}
                </div>
            </div>
        </header>
    );
}
