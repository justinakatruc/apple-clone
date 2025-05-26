import SignInFooter from "./SignInFooter";
import SignUpFooter from "./SignUpFooter";
import HomeFooter from "./HomeFooter";

function Footer({type}: { type:string}) {
  return (
    <div className="w-full bg-(--softBackground) flex items-center justify-center mt-10">
      <div className="container">
        {type === "signIn" && <SignInFooter />}
        {type === "signUp" && <SignUpFooter />}
        {type === "home" && <HomeFooter />}
      </div>
    </div>
  );
}

export default Footer;