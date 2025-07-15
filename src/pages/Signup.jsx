import React from "react";
import SignupForm from "../components/signin/SignupForm";
import DynamicTitle from "../components/DynamicTitle";
const Signup = () => {
  DynamicTitle("Sign Up");
  return <SignupForm />;
};

export default Signup;
