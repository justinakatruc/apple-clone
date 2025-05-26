import CopyRight from "./CopyRight";

function SignUpFooter() {
  return (
    <div className="w-full bg-(--softBackground) flex items-center justify-center mt-10">
      <div className="container">
        <div className="flex flex-col text-xs text-gray-500 py-4">
          <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default SignUpFooter;