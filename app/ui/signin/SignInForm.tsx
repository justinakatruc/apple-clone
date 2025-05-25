"use client";

import React from "react";
import Link from "next/link";
import { authenticate } from "@/app/lib/actions";
import { redirect } from "next/navigation";

function SignInForm() {
  const [state, formAction, loading] = React.useActionState(authenticate, undefined)
  const [passwordBox, setPasswordBox] = React.useState(false);

  React.useEffect(() => {
    if (state === "success") {
      // Redirect to the home page or another page after successful login
      redirect("/");
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col items-center gap-24">
      <div className="flex flex-col items-center gap-12">
        <span className="text-xl font-[600]">Sign in to Apple Store</span>
        <div className="relative w-full">
          <div>
            <input
              placeholder="Email or Phone Number"
              className="w-full py-3 pl-4 pr-50 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
              name="emailOrPhone"
              type="text"
            />
            {/* <div
              onClick={() => setPasswordBox(true)}
              className={"absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 " + (passwordBox ? "hidden" : "")}
            >
              ➔
            </div> */}
          </div>
          <div /*className={`${passwordBox ? "block" : "hidden"}`}*/>
            <input
              placeholder="Password"
              className={"w-full py-3 pl-4 pr-50 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"}
              name="password"
              type="password"
            />
            <button
              onClick={() => setPasswordBox(!passwordBox)}
              className="absolute cursor-pointer right-3 top-3/4 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
            >
              ➔
            </button>
          </div>
        </div>
      </div>
      { !state === false && <span>Invalid email/phone or password.</span>}
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
    </form>
  );
}

export default SignInForm;