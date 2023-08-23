import React from "react";
import Login from "../components/LoginForm";
import { SignUp } from "../redux/actions/auth.actions";
import Signup from "../components/SignForm";
import BlogCard from "../components/BlogCard";
import BlogList from "../components/BlogList";

export default function Home() {
  return (
    <div>
      <BlogList />
    </div>
  );
}
