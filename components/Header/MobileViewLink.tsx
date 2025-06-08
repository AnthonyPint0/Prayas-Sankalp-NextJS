'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import LogoutButton from '@/components/Header/LogoutButton';
import Image from 'next/image';

// Skeleton loader component
const Skeleton = () => (
    <div className="w-[120px] h-8 bg-white/20 rounded-md animate-pulse" />
);

// Helper to get initials
const getInitials = (nameOrEmail?: string | null) => {
    if (!nameOrEmail) return '?';
    const parts = nameOrEmail.split(' ');
    if (parts.length >= 2) {
        return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    } else {
        return nameOrEmail[0].toUpperCase();
    }
};

const MobileViewLink = () => {
    const { data: session, status } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const user = session?.user;

    return (
        <>
            {/* Desktop */}
            <div className="md:flex gap-4 items-center hidden">
                {status === 'loading' ? (
                    <Skeleton />
                ) : user ? (
                    <>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 text-sm rounded-md">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt="User avatar"
                                    width={24}
                                    height={24}
                                    className="rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-semibold uppercase">
                                    {getInitials(user.name || user.email)}
                                </div>
                            )}
                            <span>{user.name || user.email}</span>
                        </div>
                        <LogoutButton />
                    </>
                ) : (
                    <Link href="/login">
                        <span className="bg-orange-500 hover:bg-orange-600 transition text-white text-xs md:text-sm px-4 py-2 rounded-md font-medium">
                            Register
                        </span>
                    </Link>
                )}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? (
                        <IoClose size={24} />
                    ) : (
                        <GiHamburgerMenu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="absolute right-0 top-full w-fit bg-primary-900 px-4 py-3 rounded-b-md shadow-lg flex flex-col gap-2 text-sm font-light text-white md:hidden z-50">
                    {[
                        '/',
                        '/marketplace',
                        '/donate',
                        '/cart',
                        '/volunteer',
                        '/collab',
                    ].map((path) => (
                        <Link
                            key={path}
                            href={path}
                            onClick={toggleMenu}
                            className="nav-links capitalize"
                        >
                            {path === '/' ? 'Home' : path.slice(1)}
                        </Link>
                    ))}

                    {user ? (
                        <>
                            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-md mt-2">
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt="User avatar"
                                        width={24}
                                        height={24}
                                        className="rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-semibold uppercase">
                                        {getInitials(user.name || user.email)}
                                    </div>
                                )}
                                <span>{user.name || user.email}</span>
                            </div>
                            <LogoutButton />
                        </>
                    ) : (
                        <Link href="/login" onClick={toggleMenu}>
                            <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-xs px-4 py-2 rounded-md font-medium w-full mt-2">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </>
    );
};

export default MobileViewLink;
