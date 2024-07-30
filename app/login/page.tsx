"use client"

import FormInput from "../components/input";
import FormButton from "../components/button";
import SocialLogin from "../components/social-login";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function Login() {

  //const [state, action] = useFormState(handleForm, {potato : 1,} as any);
  const [state, action] = useFormState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login in with email and password.</h2>
      </div>
      <form action = {action} className="flex flex-col gap-3">
        <FormInput name = "email" type = "email" placeholder = "Email" required errors = {[]}   />
        <FormInput name = "password" type = "password" placeholder = "Password" required errors = {state?.errors ?? []}   />
        <FormButton text = "Login" />
      </form>
      <SocialLogin />
    </div>
  );
}