'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { TriangleAlert } from 'lucide-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

export default function SignupForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        setPasswordMismatch(
            form.confirmPassword.length > 0 &&
                form.password !== form.confirmPassword
        );
    }, [form.password, form.confirmPassword]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (passwordMismatch) {
            toast.error('Passwords do not match');
            return;
        }

        if (
            !form.name ||
            !form.email ||
            !form.password ||
            !form.confirmPassword
        ) {
            toast.info('Please fill in all fields');
            return;
        }

        setPending(true);

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message || 'Something went wrong.');
                setError(data.message || 'Something went wrong');
                return; // ✅ Prevent showing success toast after error
            }

            toast.success(data.message || 'Account created successfully!');
            setForm({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error: any) {
            toast.error(error?.message || 'Signup failed.');
        } finally {
            setPending(false);
        }
    };

    return (
        <form
            className="bg-primary-900 md:w-80 w-full max-w-80 px-6 py-8 rounded-2xl flex flex-col gap-5 shadow-lg"
            onSubmit={handleSignup}
        >
            <h2 className="text-lg font-semibold text-center mb-2">Sign Up</h2>

            {!!error && (
                <div className="bg-destructive/15 backdrop-brightness-150 bg-white/60 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert />
                    <p>{error}</p>
                </div>
            )}

            {/* Full Name */}
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    disabled={pending}
                    className="login-input_box"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    disabled={pending}
                    className="login-input_box"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm font-medium">
                        Password
                    </label>
                    <span
                        className="flex items-center gap-1 cursor-pointer text-xs"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <>
                                <FaEye className="size-4" /> Show
                            </>
                        ) : (
                            <>
                                <FaEyeSlash className="size-4" /> Hide
                            </>
                        )}
                    </span>
                </div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    required
                    disabled={pending}
                    className="login-input_box"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <label
                        htmlFor="confirmPassword"
                        className="text-sm font-medium"
                    >
                        Confirm Password
                    </label>
                    <span
                        className="flex items-center gap-1 cursor-pointer text-xs"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                        {showConfirmPassword ? (
                            <>
                                <FaEye className="size-4" /> Show
                            </>
                        ) : (
                            <>
                                <FaEyeSlash className="size-4" /> Hide
                            </>
                        )}
                    </span>
                </div>
                {passwordMismatch && (
                    <p className="text-red-500 text-[11px] mt-1">
                        Passwords do not match
                    </p>
                )}
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    required
                    disabled={pending}
                    className="login-input_box"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={pending || passwordMismatch}
                className="login-btn w-full mt-1"
            >
                {pending ? 'Signing Up...' : 'Sign Up'}
            </button>

            {/* Redirect Link */}
            <p className="text-xs text-center text-white/70 mt-1">
                Already have an account?{' '}
                <Link href="/login" className="underline text-white">
                    Sign In
                </Link>
            </p>
        </form>
    );
}
