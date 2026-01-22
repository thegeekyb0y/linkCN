import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

        <p className="mb-4 text-gray-700">
          Please sign in or sign up to continue:
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/signin"
            className="py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/dashboard"
            className="py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
