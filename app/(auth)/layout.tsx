import React from 'react';
import Image from 'next/image';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="h-full font-poppins flex flex-col md:flex-row justify-around items-center p-4 gap-4">
            <div className="flex flex-col justify-around items-center text-center md:text-left gap-4">
                <div className="flex flex-col justify-between items-start">
                    <h3 className="font-medium text-primary text-3xl">
                        Prayas-Sankalp
                    </h3>
                    <p className="font-normal text-primary-900 text-[16px]">
                        Rendering our service for others
                    </p>
                </div>
                <Image
                    src="/login_community_img.png"
                    alt="Community login illustration"
                    width={380}
                    height={(380 * 16) / 8}
                    className="w-[380px] h-auto rounded"
                    priority
                />
            </div>
            {children}
        </section>
    );
}
