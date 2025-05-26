// server

import { getUser } from "@/app/lib/actions";
import InfoSetting from "@/app/ui/account/InfoSetting";
import Divider from "@/app/ui/Divider";
import Footer from "@/app/ui/footer/Footer";
import SignOutButton from "@/app/ui/signout/SignOutButton";
import Link from "next/link";

async function AccountHomePage() {
  const user = await getUser();
  // console.log("User data:", user);
  return (
    <>
      <div className=" w-full bg-(--softBackground) flex flex-col items-center justify-center mt-10">
        <div className="container ">
          <div className="flex justify-between px-2 py-4">
            <span className="font-semibold text-xl">Account</span>
            <SignOutButton className="text-xs text-blue-700" message="Sign out>"/>
          </div>
          <Divider />
          <div className="mt-12 mb-8">
            <span className=" text-4xl font-semibold">Hi, {user.firstName}.</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-16">
        <div className="container flex flex-col gap-50">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-semibold">Your Devices</span>
            <span>You're signed in with {user.email}.</span>
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
      <div className="w-full flex flex-col items-center justify-center mt-16">
        <div className="container flex flex-col gap-8">
          <h1 className="text-3xl font-semibold mb-4">Account Settings</h1>

          {/* Shipping Section */}
          <div className="flex justify-between">
            <div className="w-1/4 font-semibold text-2xl">Shipping</div>
            <div className="w-3/4 flex gap-8">
              <InfoSetting title="Shipping address" descriptions={[user.firstName + " " + user.lastName, user.country]} />
              <InfoSetting title="Contact information" descriptions={[user.phone]} />
              <div className="w-1/3"></div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="flex justify-between">
            <div className="w-1/4 font-semibold text-2xl">Payment</div>
            <div className="w-3/4 flex gap-8">
              <InfoSetting title="Billing contact" descriptions={[]} />
              <InfoSetting title="Billing address" descriptions={[]} />
              <InfoSetting title="Payment method" descriptions={[]} />
            </div>
          </div>

          {/* Privacy Section */}
          <div className="flex justify-between">
            <div className="w-1/4 font-semibold text-2xl">Privacy</div>
            <div className="w-3/4">
              <div className="font-semibold">Personal information</div>
              <p className="text-sm text-gray-700">You're in control of your personal information and can manage your data or delete your account at any time. Apple is committed to protecting your privacy.</p>
              <Link href="#" className="text-blue-600 text-sm hover:underline">Manage my personal information ↗</Link>
            </div>
          </div>

          {/* Apple Account Section */}
          <div className="flex justify-between">
            <div className="w-1/4 font-semibold text-2xl">Apple Account</div>
            <div className="w-3/4">
              <div>{user.email}</div>
              <Link href="/shop/account/manage" className="text-blue-600 text-sm hover:underline">Manage Apple Account ↗</Link>
              <p className="text-sm text-gray-700 mt-2">
                Your Apple Account is the email address or mobile phone number you use to access Apple services like the App Store, Apple Music, iCloud, iMessage, FaceTime, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer type="home" />
    </>
  );
}

export default AccountHomePage;