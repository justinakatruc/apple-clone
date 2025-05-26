import Divider from "@/app/ui/Divider";
import Footer from "@/app/ui/footer/Footer";
import SignUpForm from "@/app/ui/signup/SignUpForm";
import Link from "next/link";

function SignUpPage() {
  return (
    <div className={`h-full flex flex-col transition-opacity duration-500 mt-10`}>
      <div className="flex flex-col items-center">
        <div className="container px-4">
          <div className="flex justify-between w-full py-4">
            <span className="text-xl font-semibold">Apple Account</span>
            <div className="flex items-center gap-4 text-xs">
              <Link href={"/shop/signIn"}>Sign In</Link>
              <Link href={"/shop/signUp"}>Create Your Apple Account</Link>
              <Link href={"/shop/forgotPassword"}>Forgot Password?</Link>
            </div>
          </div>
          <Divider />
          <div className="w-full flex items-center justify-center">
            <SignUpForm />
          </div>
        </div>
      </div>
      <Footer type="signUp" />
    </div>
  );
}

export default SignUpPage;