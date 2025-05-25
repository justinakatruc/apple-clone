import Link from "next/link";

function SignInForm() {
  return (
    <div className="flex flex-col items-center gap-24">
      <div className="flex flex-col items-center gap-12">
        <span className="text-xl font-[600]">Sign in to Apple Store</span>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full py-3 pl-4 pr-50 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
          >
            ➔
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10">

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        {/* Forgot Password */}
        <div className="flex flex-col items-center gap-2 text-sm">
          <Link href="#" className="text-blue-500">Forgot password?</Link>
          <span>Don't have an Apple Account? <Link href="#" className="text-blue-500">Create Your Apple Account</Link></span>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;