import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "../components/LoginForm";
import Signup from "../components/SignForm";
import CreateBlogForm from "../components/CreateBlogForm";
import MyBlogs from "./MyBlogs";
import Private from "./Private";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/createblog"
        element={
          <Private>
            <CreateBlogForm />
          </Private>
        }
      />
      <Route
        path="/myBlogs"
        element={
          <Private>
            <MyBlogs />
          </Private>
        }
      />
    </Routes>
  );
}
