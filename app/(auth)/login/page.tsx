import LoginForm from '@/app/(auth)/login/LoginForm';

export default async function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full md:w-fit gap-4 text-white font-poppins">
            {/* Login Card */}
            <LoginForm />
        </div>
    );
}
