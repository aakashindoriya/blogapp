import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { getBlogs } from "../redux/actions/blog.actions";
import { Heading, VStack } from "@chakra-ui/react";
import QueryBox from "./QueryBox";
let init = {
  category: "",
  title: "",
};
export default function BlogList() {
  const { blogs } = useSelector((s) => s.blog);
  const [query, setQuery] = useState(init);
  function handleQuery(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs(query));
  }, [query.title, query.category]);
  return (
    <VStack m="auto" p="5" gap="5" justifyContent={"center"}>
      <Heading>Blogs</Heading>
      <QueryBox query={query} handleQuery={handleQuery} />
      {blogs?.map((el) => (
        <BlogCard {...el} key={el._id} />
      ))}
    </VStack>
  );
}
