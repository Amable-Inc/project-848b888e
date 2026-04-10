export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-red-100">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="heart-float absolute top-20 left-[10%] text-4xl opacity-20">❤️</div>
        <div className="heart-float absolute top-40 left-[20%] text-2xl opacity-30" style={{ animationDelay: '1s' }}>💕</div>
        <div className="heart-float absolute top-60 left-[80%] text-3xl opacity-20" style={{ animationDelay: '2s' }}>💖</div>
        <div className="heart-float absolute top-32 left-[60%] text-2xl opacity-25" style={{ animationDelay: '1.5s' }}>❤️</div>
        <div className="heart-float absolute top-80 left-[30%] text-4xl opacity-15" style={{ animationDelay: '0.5s' }}>💗</div>
        <div className="heart-float absolute top-96 left-[70%] text-2xl opacity-30" style={{ animationDelay: '2.5s' }}>💕</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Card Container */}
        <div className="w-full max-w-4xl rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12 md:p-16">
          {/* Top decorative hearts */}
          <div className="mb-8 flex justify-center gap-4 text-5xl">
            <span className="animate-pulse">❤️</span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>💕</span>
            <span className="animate-pulse" style={{ animationDelay: '1s' }}>❤️</span>
          </div>

          {/* Name */}
          <h2 className="mb-6 text-center text-4xl font-bold text-rose-600 sm:text-5xl md:text-6xl">
            Karen
          </h2>

          {/* Main Message */}
          <h1 className="mb-8 text-center text-3xl font-semibold leading-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
            Te amo con todo mi corazón
          </h1>

          {/* Romantic Image */}
          <div className="my-12 overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80" 
              alt="Romantic hearts"
              className="h-64 w-full object-cover sm:h-80 md:h-96"
            />
          </div>

          {/* Bottom decorative hearts */}
          <div className="mt-8 flex justify-center gap-3 text-4xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>💖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💗</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💕</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>💗</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>💖</span>
          </div>
        </div>

        {/* Footer message */}
        <p className="mt-8 text-center text-lg font-medium text-rose-700 sm:text-xl">
          Siempre y para siempre 💕
        </p>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }

        .heart-float {
          animation: float 15s infinite linear;
        }
      `}</style>
    </div>
  );
}
