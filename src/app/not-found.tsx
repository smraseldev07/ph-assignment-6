import Link from 'next/link';
import React from 'react';

const NotfoundPage = () => {
    return (
        <div>
            <div className="flex min-h-screen items-center justify-center bg-[#0b0d11] px-6 text-white">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-[120px] font-black leading-none tracking-tighter text-lime-400">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
          The page you are looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back to your workout plan.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-lime-400 px-7 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
        </div>
    );
};

export default NotfoundPage;