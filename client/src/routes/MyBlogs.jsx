import { Heading, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyBlogs } from "../redux/actions/blog.actions";
import BlogCard from "../components/BlogCard";
import BlogOptions from "../components/BlogOptions";

function MyBlogs() {
  const { myBlogs } = useSelector((s) => s.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyBlogs());
  }, []);
  return (
    <VStack>
      <Heading>My Blogs</Heading>
      {myBlogs?.map((el) => (
        <VStack>
          <BlogOptions {...el} key={el._id} />
          <BlogCard {...el} key={el._id} />
        </VStack>
      ))}
    </VStack>
  );
}

export default MyBlogs;
