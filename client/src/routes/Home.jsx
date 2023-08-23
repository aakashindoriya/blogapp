import React from "react";
import Login from "../components/LoginForm";
import { SignUp } from "../redux/actions/auth.actions";
import Signup from "../components/SignForm";

export default function Home() {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}
