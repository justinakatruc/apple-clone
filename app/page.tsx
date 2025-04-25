
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-2xl font-bold text-center">
        Apple Clone With Next.js
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Welcome to the Apple Clone</h1>
        <p className="text-lg text-gray-600">
          This is a simple clone of Apple's website using Next.js.
        </p>
      </div>
      <div className="text-sm text-gray-500 text-center">
        © 2025 Truc Minh Nguyen. All rights reserved.
      </div>
    </div>
  );
}
