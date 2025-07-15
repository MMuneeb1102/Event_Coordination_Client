import React from "react";
import SigninForm from "../components/signin/SigninForm";
import DynamicTitle from "../components/DynamicTitle";
const Signin = () => {
  DynamicTitle("Sign In");
  return <SigninForm />;
};

export default Signin;
