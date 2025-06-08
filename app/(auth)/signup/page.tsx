import SignupForm from '@/app/(auth)/signup/SignupForm';

export default async function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full md:w-fit gap-4 text-white font-poppins">
            <SignupForm />
        </div>
    );
}
