import {
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  Select,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBlog } from "../redux/actions/blog.actions";

export default function EditBlogForm({ _id, title, category, content }) {
  const [data, setData] = useState({ title, category, content });
  const dispatch = useDispatch();
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    dispatch(editBlog({ id: _id, ...data }));
  }
  return (
    <>
      <VStack>
        <Heading>Edit Blog</Heading>
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
    </>
  );
}
