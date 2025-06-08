import React from 'react';
import { IconType } from 'react-icons';
import Image from 'next/image';

interface StatCardProps {
    icon?: IconType;
    imageSrc?: string;
    imageAlt?: string;
    count: number;
    label: string;
    title: string;
    description: string;
}

export default function StatCard({
    icon: Icon,
    imageSrc,
    imageAlt = 'Stat image',
    count,
    label,
    title,
    description,
}: StatCardProps) {
    return (
        <div className="flex flex-col gap-2 bg-[#FDF9F5] min-w-52 max-w-60 py-6 px-4 rounded-md shadow-md">
            <div className="flex gap-2 items-end">
                {Icon && <Icon className="size-10" />}
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                )}
                <div className="flex flex-col">
                    <span className="font-semibold text-sm">{count}</span>
                    <span className="font-normal text-[10px]">{label}</span>
                </div>
            </div>
            <h2 className="font-semibold text-xl text-font_secondary">
                {title}
            </h2>
            <p className="font-normal text-[12px] leading-snug text-gray-800 max-w-52">
                {description}
            </p>
        </div>
    );
}
