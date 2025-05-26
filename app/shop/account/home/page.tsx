import { getEmail, getUsername } from "@/app/lib/actions";
import Divider from "@/app/ui/Divider";
import SignOutButton from "@/app/ui/signout/SignOutButton";
import Link from "next/link";

async function AccountHomePage() {

  return (
    <>
      <div className="w-full bg-(--softBackground) flex flex-col items-center justify-center mt-10">
        <div className="container">
          <div className="flex justify-between px-2 py-4">
            <span className="font-semibold text-xl">Account</span>
            <SignOutButton className="text-xs text-blue-700" message="Sign out>"/>
          </div>
          <Divider />
          <div className="mt-12 mb-8">
            <span className=" text-4xl font-semibold">Hi, {await getUsername()}.</span>
            {/* <span className="text-sm text-gray-600">Email: {await getEmail()}</span> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-16">
        <div className="container flex flex-col gap-50">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-semibold">Your Devices</span>
            <span>You're signed in with {await getEmail()}.</span>
          </div>
          <div className="flex flex-col gap-8">
            <span>Don't see your device here? To link a device or make changes, view your <Link href="#" className="text-blue-700 underline">Apple Account settings</Link>.</span>
            <Divider />
            <div className="flex flex-col gap-2">
              <p>See the trade-in value of your device instantly. Trade it in for credit toward a new purchase, an Apple Store Gift Card or recycle it for free with Apple Trade In.</p>
              <Link href="#" className="text-blue-700">See how it works</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountHomePage;