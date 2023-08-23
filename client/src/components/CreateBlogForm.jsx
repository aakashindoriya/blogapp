import { Button, Heading, Input, Select, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateBlog } from "../redux/actions/blog.actions";
let init = {
  title: "",
  category: "",
  content: "",
};
export default function CreateBlogForm() {
  const [data, setData] = useState(init);
  const dispatch = useDispatch();
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    dispatch(CreateBlog(data));
  }
  return (
    <VStack>
      <Heading>Create Blog</Heading>
      <VStack>
        <Input
          placeholder="title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <Select
          name="category"
          placeholder="category"
          value={data.category}
          onChange={handleChange}
        >
          <option value="tech">TECH</option>
          <option value="education">EDUCATION</option>
          <option value="health">HEALTH</option>
        </Select>
        <Input
          placeholder="enter content"
          name="content"
          value={data.content}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </VStack>
    </VStack>
  );
}
