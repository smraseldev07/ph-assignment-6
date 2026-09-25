import React from 'react';

const LoadingPage = () => {
    return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0f12]">
      <div className="flex flex-col items-center">

        {/* Logo / Spinner */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 animate-spin rounded-full border-2 border-transparent border-t-lime-400 border-r-lime-400" />

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#15181e]">
            <span className="text-2xl font-black text-lime-400">
              F
            </span>
          </div>
        </div>

        {/* Brand */}
        <h1 className="mt-6 text-xl font-black tracking-[0.25em] text-white">
          FITLOG
        </h1>

        <p className="mt-2 text-xs text-gray-500">
          Loading your workout...
        </p>

        {/* Loading dots */}
        <div className="mt-4 flex gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-400" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-400 [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-400 [animation-delay:300ms]" />
        </div>

      </div>
    </div>
    
    );
};

export default LoadingPage;