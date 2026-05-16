"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-black text-red-500">Something went wrong</h1>

      <p className="mt-4 text-zinc-400">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 bg-red-500 rounded-xl"
      >
        Try Again
      </button>
    </div>
  );
}
