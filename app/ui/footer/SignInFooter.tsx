import Divider from "../Divider";
import CopyRight from "./CopyRight";

function SignInFooter() {
  return (
    <div className="flex flex-col gap-2 text-xs text-gray-500 py-6">
      <span>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our Security Policy.</span>
      <Divider />
      <span className="mt-1">More ways to shop: Find an Apple Store or other retailer near you. Or call 1‑800‑MY‑APPLE.</span>
      <CopyRight />
    </div>
  );
}

export default SignInFooter;