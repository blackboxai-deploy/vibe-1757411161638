"use client";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="text-center px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4 animate-pulse">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-md mx-auto leading-relaxed">
          Welcome to your beautiful Next.js application
        </p>
        <div className="mt-8">
          <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
            Built with ❤️ using Next.js & Tailwind CSS
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </main>
  );
}