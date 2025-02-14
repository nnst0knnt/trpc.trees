import { Animated } from "../components";

export const Busyness = () => (
  <div className="min-h-dvh bg-linear-to-b from-green-50 to-emerald-100 overflow-hidden relative p-4">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-200/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-lime-200/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
    </div>
    <div className="relative z-10 max-w-2xl mx-auto mt-20">
      <div className="text-center mb-8">
        <div className="inline-block bg-white/80 backdrop-blur-xs px-6 py-3 rounded-full shadow-lg mb-6">
          <h1 className="text-xl font-bold text-emerald-800 flex items-center gap-3">
            <span className="animate-bounce">🌱</span>
            <span>メンテナンス中</span>
            <span className="animate-bounce delay-100">🌱</span>
          </h1>
        </div>
        <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl shadow-lg mb-8">
          <div className="space-y-3">
            <p className="text-xl font-bold text-emerald-700">
              新しい木を植えています
            </p>
            <p className="text-base text-emerald-600">
              より良い森になるように手入れ中です
            </p>
            <div className="text-sm text-emerald-500 flex items-center justify-center gap-2">
              <span>しばらくお待ちください</span>
              <span className="animate-pulse">🌿</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/90 backdrop-blur-xs p-8 rounded-2xl shadow-lg">
        <div className="relative">
          <div className="absolute inset-x-0 -top-12 flex justify-center">
            <div className="px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-700 shadow-xs">
              成長過程を見守っています...
            </div>
          </div>
          <Animated />
          <div className="mt-4 text-center text-sm text-emerald-600">
            リロードすると最初から育て直せます
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-emerald-600/80 text-sm">trpc.trees 🌳</p>
      </div>
    </div>
  </div>
);
