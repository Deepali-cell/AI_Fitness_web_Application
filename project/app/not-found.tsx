import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-8xl font-black text-cyan-400">404</h1>

      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

      <p className="mt-3 text-zinc-400 text-center max-w-md">
        The page you’re trying to access does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold"
      >
        Back Home
      </Link>
    </div>
  );
}
