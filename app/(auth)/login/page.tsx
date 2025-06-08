'use client';

import React, { useState } from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex flex-col items-center justify-center gap-4 text-white font-poppins">
            {/* Login Card */}
            <form
                className="bg-primary-900 w-80 px-6 py-8 rounded-2xl flex flex-col gap-5 shadow-lg"
                // onSubmit={}
            >
                <h2 className="text-lg font-semibold text-center mb-2">
                    Welcome Back
                </h2>

                {/* Email Input */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="login-input_box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium"
                        >
                            Password
                        </label>
                        <span className="flex items-center gap-1 cursor-pointer text-xs">
                            <FaEye className="size-4" />
                            Hide
                        </span>
                    </div>
                    <input
                        type="password"
                        id="password"
                        required
                        className="login-input_box"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Login Button */}
                <button type="submit" className="login-btn w-full mt-1">
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
        </div>
    );
};

export default LoginForm;
