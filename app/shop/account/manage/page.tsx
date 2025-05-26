// server component

import SignOutButton from "@/app/ui/signout/SignOutButton";
import { deleteUser, getUser } from "@/app/lib/actions";

async function ManageAccountPage() {
  const user = await getUser();
  console.log("User data:", user);
  return (
    <div className={`h-full flex flex-col items-center transition-opacity duration-500 mt-12`}>
      <div className={`w-full flex flex-col items-center duration-200`}>
        <div className="container">
          <div className="bg-white text-black font-sans p-2">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 border-gray-300">
              <h1 className="text-xl font-semibold">Apple Account</h1>
              <form action={deleteUser} className="text-red-600 hover:text-red-800">
                <input name="email" value={user.email} type="hidden" />
                <button className="cursor-pointer">Delete Account</button>
              </form>
              <SignOutButton className="text-sm text-white bg-blue-500 py-1 px-3 rounded-4xl hover:bg-blue-600" message="Sign out" />
            </div>

            {/* Main Layout */}
            <div className="mt-6 flex gap-12">
              {/* Sidebar */}
              <aside className="w-64">
                <div className="flex flex-col items-start mb-6">
                  <img
                    src="/apple_logo.svg"
                    alt="avatar"
                    className="w-20 h-20 rounded-full mb-2"
                  />
                  <div>
                    <p className="font-medium">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 text-sm font-medium text-gray-600">
                  <a href="#" className="hover:text-black">Personal Information</a>
                  <a href="#" className="text-blue-600">Sign-In and Security</a>
                  <a href="#" className="hover:text-black">Payment & Shipping</a>
                  <a href="#" className="hover:text-black">Subscriptions</a>
                  <a href="#" className="hover:text-black">Family Sharing</a>
                  <a href="#" className="hover:text-black">Devices</a>
                  <a href="#" className="hover:text-black">Privacy</a>
                </nav>
              </aside>

              {/* Content */}
              <section className="flex-1">
                <h2 className="text-xl font-semibold mb-1">Sign-In and Security</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Manage settings related to signing in to your account, account security, as well as how to recover your data when you're having trouble signing in.
                </p>

                {/* Grid Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <Card title="Email & Phone Numbers" subtitle="minhtruc103@gmail.com\n+84 355121205" icon="✉️" />
                  <Card title="Password" subtitle="Last updated May 5, 2024" icon="🔒" />
                  <Card title="Account Security" subtitle="Two-factor authentication\n1 trusted phone number\n2 trusted devices" icon="🛡️" />
                  <Card title="Account Recovery" subtitle="Not Set Up" icon="🆘" />
                  <Card title="Legacy Contact" subtitle="Not Set Up" icon="📜" />
                  <Card title="Sign in with Apple" subtitle="1 app or website" icon="🍎" />
                  <Card title="App-Specific Passwords" subtitle="View details" icon="🔑" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, subtitle, icon }: { title: string; subtitle: string; icon: string }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow transition duration-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-sm text-gray-600 whitespace-pre-line">{subtitle}</p>
    </div>
  );
}

export default ManageAccountPage;
