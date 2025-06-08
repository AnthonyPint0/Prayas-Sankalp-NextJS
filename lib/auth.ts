// lib/auth.ts
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        // Github({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                try {
                    await connectToDatabase();
                    const user = await User.findOne({
                        email: credentials?.email,
                    });
                    if (!user) {
                        throw new Error('User Not Found');
                    }
                    const isValidPassword = await bcrypt.compare(
                        credentials?.password ?? '',
                        user.password as string
                    );
                    if (!isValidPassword) {
                        throw new Error('Invalid Password');
                    }
                    console.log('Login Successfully for:s', user.name);
                    return user;
                } catch (err: any) {
                    throw new Error(err.message || 'InternalError');
                }
            },
        }),
    ],
    callbacks: {
        // async signIn({ account, profile }) {
        //     if (account?.provider === 'github') {
        //         await connectToDatabase();
        //         const existingUser = await User.findOne({
        //             email: profile?.email,
        //         });
        //         if (!existingUser) {
        //             await User.create({
        //                 name: profile?.name,
        //                 email: profile?.email,
        //             });
        //         }
        //     }
        //     return true;
        // },

        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    email: token.email,
                    name: token.name,
                    image: token?.picture,
                };
            }
            return session;
        },
    },
    pages: {
        signIn: '/sign-in',
    },
    secret: process.env.NEXTAUTH_SECRET,
};
