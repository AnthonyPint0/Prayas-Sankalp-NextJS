'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className="text-sm px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
        >
            Logout
        </button>
    );
}
