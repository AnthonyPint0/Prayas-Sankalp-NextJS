'use client';

import React, { useEffect, useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const { data: session, status } = useSession();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            window.location.href = '/';
        }
    }, [status]);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);

        const res = await signIn('credentials', {
            email: form.email,
            password: form.password,
            redirect: false,
        });

        console.log(res);

        if (res?.ok) {
            toast.success('Login Successful');
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } else if (res?.error) {
            const errMessage = res.error || 'Something went wrong.';
            toast.error(errMessage);
            setError(errMessage);
        }
        setTimeout(() => {
            setPending(false);
        }, 5000);
    };

    return (
        <form
            className="bg-primary-900 md:w-80 w-full max-w-80 px-6 py-8 rounded-2xl flex flex-col gap-5 shadow-lg"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h2 className="text-lg font-semibold text-center mb-2">
                Welcome Back
            </h2>

            {!!error && (
                <div className="bg-destructive/15 backdrop-brightness-150 bg-white/60 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert />
                    <p>{error}</p>
                </div>
            )}

            {/* Email Input */}
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
                    onChange={handleFormChange}
                    autoComplete="current-password"
                />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm font-medium">
                        Password
                    </label>
                    <span
                        className="flex items-center gap-1 cursor-pointer text-xs"
                        onClick={(event) => handleShowPassword()}
                    >
                        {!showPassword ? (
                            <>
                                <FaEyeSlash className="size-4" />
                                Hide
                            </>
                        ) : (
                            <>
                                <FaEye className="size-4" />
                                Show
                            </>
                        )}
                    </span>
                </div>
                <input
                    type={`${showPassword ? 'text' : 'password'}`}
                    id="password"
                    required
                    disabled={pending}
                    className="login-input_box"
                    value={form.password}
                    onChange={handleFormChange}
                    autoComplete="current-password"
                />
            </div>

            {/* Login Button */}
            <button
                type="submit"
                disabled={pending}
                className="login-btn w-full mt-1"
            >
                Login
            </button>

            {/* Forgot Password Link */}
            <Link
                href="/"
                className="text-xs text-white/60 underline self-start"
            >
                Forgot your password?
            </Link>

            {/* Divider */}
            <div className="flex items-center gap-2 w-full">
                <hr className="border-t border-white/30 w-full" />
                <span className="text-xs text-white/60">or</span>
                <hr className="border-t border-white/30 w-full" />
            </div>

            {/* Google Button */}
            <button
                // onClick={}
                className="bg-white text-black py-2 rounded-2xl font-medium flex items-center justify-center gap-2"
            >
                <FcGoogle size={20} />
                Sign in with Google
            </button>

            {/* GitHub Button */}
            <button
                // onClick={}
                className="bg-black text-white py-2 rounded-2xl font-medium flex items-center justify-center gap-2"
            >
                <FaGithub size={20} />
                Sign in with GitHub
            </button>

            {/* Sign Up Link */}
            <p className="text-xs text-center text-white/70 mt-1">
                Don’t have an account?{' '}
                <Link href="/signup" className="underline text-white">
                    Create one
                </Link>
            </p>
        </form>
    );
};
export default LoginForm;
