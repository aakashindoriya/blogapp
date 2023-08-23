import { HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <HStack
      justifyContent={"space-evenly"}
      zIndex={"5"}
      position={"sticky"}
      top="0%"
      h="70px"
      alignItems={"center"}
      borderBottom={"1px solid"}
      bg="white"
      fontSize={"md"}
    >
      <Link to="/">Home</Link>
      <Link to="myblogs">MyBlogs</Link>
      <Link to="login">Login</Link>
      <Link to="signup">Signup</Link>
    </HStack>
  );
}

export default Navbar;
