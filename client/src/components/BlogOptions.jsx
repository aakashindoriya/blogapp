import { Button, HStack, VStack, propNames } from "@chakra-ui/react";
import React, { useState } from "react";
import EditBlogForm from "./EditBlogCard";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../redux/actions/blog.actions";

export default function BlogOptions(props) {
  const [open, SetOpen] = useState(false);
  const dispatch = useDispatch();
  function HandleDelete() {
    dispatch(deleteBlog({ id: props._id }));
  }
  return (
    <VStack>
      <HStack>
        <Button onClick={() => SetOpen(!open)}>
          {open ? "cencel" : "Edit"}
        </Button>
        <Button onClick={HandleDelete}>Delete</Button>
      </HStack>
      {open && <EditBlogForm {...props} />}
    </VStack>
  );
}
