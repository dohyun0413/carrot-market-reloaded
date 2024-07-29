import FormInput from "../components/form-input";
import FormButton from "../components/form-btn";
import SocialLogin from "../components/social-login";

export default function Login() {
  async function handleForm(formdata : FormData) {
    "use server";
    await new Promise(resolve => setTimeout(resolve,5000));
    //console.log(formdata.get("email"), formdata.get("password"))

  }

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login in with email and password.</h2>
      </div>
      <form action = {handleForm} className="flex flex-col gap-3">
        <FormInput name = "email" type = "email" placeholder = "Email" required errors = {[""]}   />
        <FormInput name = "password" type = "password" placeholder = "Password" required errors = {[""]}   />
        <FormButton text = "Login" />
      </form>
      <SocialLogin />
    </div>
  );
}