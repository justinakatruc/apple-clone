import SignInFooter from "@/app/ui/footer/SignInFooter";
import SignInForm from "@/app/ui/signin/SignInForm";

export default function SignInPage() {
  return (
    <div className={`h-full flex flex-col items-center transition-opacity duration-500 mt-10`}>
        <div className={`w-full flex flex-col items-center duration-200`}>
          {/* Main Content */}
          <div className="container px-4 py-9 flex flex-col gap-20">
            <span className="text-4xl font-semibold">Sign in for faster checkout.</span>

            {/* Sign In */}
            <SignInForm />
          </div>
          {/* Footer */}
          <div className="w-full flex flex-col items-center justify-center mt-10">
            <div className="border border-gray-300 w-full"></div>
            <div className="container py-4 px-4">
              <span>Need some help? Chat now or call 1‑800‑MY‑APPLE.</span>
            </div>
          </div>
          <div className="w-full bg-(--softBackground) flex items-center justify-center">
            <div className="container px-4">
              <SignInFooter />
            </div>
          </div>
        </div>
      </div>
  );
}