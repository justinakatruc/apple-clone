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
              placeholder="Email"
              className="w-full py-3 pl-4 pr-50 rounded-t-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
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
              className={"w-full py-3 pl-4 pr-50 rounded-b-xl border-b border-l border-r border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"}
              name="password"
              type="password"
            />
            {!loading && 
            <button
              onClick={() => setPasswordBox(!passwordBox)}
              className="absolute cursor-pointer right-3 top-3/4 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100"
            >
              ➔
            </button>}
            {loading && 
            <div className="absolute right-3 top-3/4 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 text-gray-600">
              <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.93A8.003 8.003 0 014 12H0c0 5.523 4.477 10 10 12v-4a6.002 6.002 0 01-3.07-1.07z"></path>
              </svg>
            </div>}
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
          <span>Don't have an Apple Account? <Link href="/shop/signUp" className="text-blue-500">Create Your Apple Account</Link></span>
        </div>
      </div>
    </form>
  );
}

export default SignInForm;