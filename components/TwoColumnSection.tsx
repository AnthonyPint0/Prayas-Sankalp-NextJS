import Image from 'next/image';
import React from 'react';

interface TwoColumnSectionProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    imageFirst?: boolean;
    children?: React.ReactNode;
}

export default function TwoColumnSection({
    imageSrc,
    imageAlt,
    title,
    description,
    imageFirst = false,
    children,
}: TwoColumnSectionProps) {
    return (
        <div
            className={`bg-white rounded shadow-md w-full flex flex-col ${
                imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'
            } justify-around items-center gap-6 font-inter px-4 py-8 overflow-hidden`}
        >
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={300}
                className="w-full max-w-md h-auto mix-blend-multiply"
            />
            <div className="flex flex-col gap-4 justify-around max-w-[400px]">
                <h2 className="font-semibold text-xl text-font_secondary">
                    {title}
                </h2>
                <p className="text-sm font-medium text-gray-600">
                    {description}
                </p>
                {children}
            </div>
        </div>
    );
}
