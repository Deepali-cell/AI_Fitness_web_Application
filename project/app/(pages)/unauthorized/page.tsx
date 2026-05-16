import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-black text-cyan-400">Access Denied</h1>

      <p className="mt-4 text-zinc-400 text-center max-w-lg">
        You need to login to access this page.
      </p>

      <Link
        href="/authenticate"
        className="mt-8 px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold"
      >
        Login
      </Link>
    </div>
  );
}
