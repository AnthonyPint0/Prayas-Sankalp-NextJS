import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

export default function ServiceCard({
    imageSrc,
    alt,
    title,
    description,
    buttonText,
    link,
}: {
    imageSrc: string;
    alt: string;
    title: string;
    description: string;
    buttonText: string;
    link: string;
}) {
    return (
        <div className="bg-white rounded shadow-md min-w-64 w-full max-w-[300px] h-[350px] flex flex-col justify-between gap-4 p-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg group">
            <Image
                src={imageSrc}
                alt={alt}
                width={55}
                height={55}
                className="w-fit h-[55px] transition-transform duration-300 group-hover:scale-110"
                priority
            />
            <div>
                <h2 className="font-semibold text-xl text-font_secondary mb-2">
                    {title}
                </h2>
                <p className="text-sm font-medium text-gray-600">
                    {description}
                </p>
            </div>
            <div className="w-full flex justify-center">
                <Button href={link} text={buttonText} withIcon={true} />
            </div>
        </div>
    );
}
