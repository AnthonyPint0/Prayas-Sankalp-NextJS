'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.error('Error boundary caught:', error);
    }, [error]);

    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-primary-100 text-white font-poppins p-6 ">
                <h2 className="text-3xl font-bold mb-4 text-destructive">
                    Something went wrong
                </h2>
                <p className="text-sm text-white/80 mb-6 text-center max-w-md">
                    {error.message ||
                        'An unexpected error occurred. Please try again.'}
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={() => reset()}
                        className="px-4 py-2 bg-orange-500 rounded-md text-sm hover:bg-orange-600 transition"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="px-4 py-2 bg-white text-black rounded-md text-sm hover:bg-gray-200 transition"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
}
