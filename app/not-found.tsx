export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-white bg-primary-900 px-4">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">
                Sorry, the page you're looking for does not exist.
            </p>
            <a
                href="/"
                className="text-orange-500 underline text-sm hover:text-orange-600"
            >
                Go back home
            </a>
        </div>
    );
}
