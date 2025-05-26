// client

import React from 'react';
import { updateUser } from '@/app/lib/actions';
import { useUser } from '@/app/lib/hooks';

function ShippingAddressForm() {
  const [state, formAction, loading] = React.useActionState(updateUser, undefined)
  const [user] = useUser();

  React.useEffect(() => {
    if (state && !loading) {
      // refresh the page to reflect changes
      window.location.reload();
    }
  }, [state, loading]);
  return (
    <form action={formAction} className="flex flex-col items-center py-8 gap-8 px-16">
      <h1 className="text-3xl font-semibold mb-4 p-2">Edit your shipping address.</h1>
      <div className="flex flex-col gap-4 w-full">
        <input name="firstName" className="border border-gray-500 rounded-xl p-3" type="text" placeholder="First Name" defaultValue={user.firstName} />
        <input name="lastName" className="border border-gray-500 rounded-xl p-3" type="text" placeholder="Last Name" defaultValue={user.lastName} />
        <input name="address" className="border border-gray-500 rounded-xl p-3" type="text" placeholder="Address" defaultValue={user.address} />
        <select name="country" id="country" className="border border-gray-500 rounded-xl p-3" defaultValue={user.country}>
          <option value="Vietnam">Vietnam</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        <input name="phone" className="border border-gray-500 rounded-xl p-3" type="text" placeholder="Phone Number" defaultValue={user.phone} />
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
        <div className="text-green-600 text-center">
          {state}
        </div>
      )}
      <button name="formName" value="shipping address" className="w-full p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 cursor-pointer" type="submit">Save</button>
    </form>
  );
}

export default ShippingAddressForm;