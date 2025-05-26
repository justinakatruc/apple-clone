// client

import ShippingAddressForm from "./ShippingAddressForm";

interface InfoSettingFormsProps {
  type: string;
} 

function InfoSettingForms({ type }: InfoSettingFormsProps) {
  return (
    <div>
      {type === "shippingaddress" && <ShippingAddressForm />}
      {/* {type === "payment" && <PaymentForm />} */}
      {/* {type === "privacy" && <PrivacyForm />} */}
      {/* {type === "appleAccount" && <AppleAccountForm />} */}
    </div>
  );
}

export default InfoSettingForms;