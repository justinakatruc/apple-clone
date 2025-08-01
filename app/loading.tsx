export default function Loading() {
  return (
    <div className="h-full flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="w-full flex flex-col items-center duration-200">
        {/* Main Content */}
        <div className="container px-4 py-16 flex flex-col gap-20">
          <span className="text-4xl font-semibold">Loading...</span>
        </div>
        {/* Footer */}
        <div className="w-full flex flex-col items-center justify-center mt-10">
          <div className="container py-4 px-4">
            <span>Need some help? Chat now or call 1-800-MY-APPLE.</span>
          </div>
          <div className="w-full flex justify-center">
            <span className="text-sm text-gray-500">Loading...</span>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <span className="text-sm text-gray-500">Please wait...</span>
        </div>
      </div>
    </div>
  );
}
