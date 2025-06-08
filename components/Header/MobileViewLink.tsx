'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

const MobileViewLink = ({ session }: { session: any }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <Link href="/login">
                <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-xs md:text-sm px-4 py-2 rounded-md font-medium">
                    Register
                </button>
            </Link>
            {/* Hamburger Icon (Mobile) */}
            <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? (
                        <IoClose size={24} />
                    ) : (
                        <GiHamburgerMenu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Panel */}
            {menuOpen && (
                <div className="absolute right-0 top-full mt-1 w-full bg-primary-900 px-4 py-3 rounded-b-md shadow-lg flex flex-col gap-2 text-sm font-light text-white md:hidden z-50">
                    {[
                        '/',
                        '/marketplace',
                        '/donate',
                        '/cart',
                        '/volunteer',
                        '/collab',
                    ].map((path, i) => (
                        <Link
                            key={i}
                            href={path}
                            onClick={toggleMenu}
                            className="nav-links capitalize"
                        >
                            {path === '/' ? 'Home' : path.slice(1)}
                        </Link>
                    ))}

                    {session?.user ? (
                        <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-md mt-2">
                            <User size={18} />
                            <span>
                                {session.user.name || session.user.email}
                            </span>
                        </div>
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
