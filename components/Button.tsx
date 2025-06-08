import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
    href: string;
    text: string;
    withIcon?: boolean;
    className?: string;
}

export default function Button({
    href,
    text,
    withIcon = false,
    className = '',
}: ButtonProps) {
    return (
        <Link href={href}>
            <button
                className={`bg-font_secondary text-white text-xs font-medium px-4 py-2 rounded flex items-center gap-2 mt-2 transition-all !ease-in duration-100 hover:bg-font_secondary/85 hover:font-bold ${className}`}
            >
                <span>{text}</span>
                {withIcon && (
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
            </button>
        </Link>
    );
}
