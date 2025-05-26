"use client";

import React from 'react';
import Link from "next/link";
import Divider from "@/app/ui/Divider";
import { signUp } from '@/app/lib/actions';

function SignUpForm() {
  const [state, formAction, loading] = React.useActionState(signUp, undefined);

  return (
    <form action={formAction} className="flex flex-col items-center py-8 gap-8">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-semibold">Create Your Apple Account</h1>
          <div className="text-center">
            <p>One Apple Account is all you need to access all Apple services.</p>
            <p>Already have an Apple Account? <Link href={"/shop/signIn"} className="text-blue-500 hover:underline">Sign In</Link></p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input name="firstName" className="border border-gray-500 rounded-xl p-3" type="text" placeholder="First Name" required/>
            <input name="lastName" className="border border-gray-500 rounded-xl p-3" type="text" placeholder="Last Name" />
          </div>
          <select name="country" id="country" className="border border-gray-500 rounded-xl p-3">
            <option value="Viet Nam">Vietnam</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" >Birthday</label>
          <div className="flex gap-2">
            <select className="flex-1 border border-gray-500 rounded-xl p-3" name="month" id="month">
              <option value="">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select className="flex-1 border border-gray-500 rounded-xl p-3" name="day" id="day">
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="flex-1 border border-gray-500 rounded-xl p-3" name="year" id="year">
              <option value="">Year</option>
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i + 1920} value={i + 1920}>{i + 1920}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Divider />
      </div>
      <div className="flex flex-col w-full gap-2">
        <input className="p-4 border-black border border-gray-500 rounded-xl" name="email" type="email" placeholder="name@example.com" required/>
        <span>This will be your new Apple Account.</span>
        <input className="p-4 border-black border border-gray-500 rounded-xl" name="password" type="password" placeholder="Password" required/>
        <input className="p-4 border-black border border-gray-500 rounded-xl" name="confirmPassword" type="password" placeholder="Confirm Password" required/>
      </div>
      <div className="w-full">
        <Divider />
      </div>
      {loading && (
        <div className="flex justify-center items-center">
          <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.93A8.003 8.003 0 014 12H0c0 5.523 4.477 10 10 12v-4a6.002 6.002 0 01-3.07-1.07z"></path>
          </svg>
        </div>
      )}
      {state && typeof state === 'string' && (
        <div className="text-red-500 text-center">
          {state}
        </div>
      )}
      <button className="w-full p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 cursor-pointer" type="submit">Create Account</button>
    </form>
  );
}

export default SignUpForm;