import {
  Center,
  HStack,
  Heading,
  Image,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function BlogCard({ title, content, author, category }) {
  return (
    <HStack p="5" gap="1" maxW="80%">
      <Image
        maxW="45%"
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
      />
      <VStack w="45%">
        <Heading fontSize={"md"}>Author :{author.name}</Heading>
        <Heading fontSize={"md"}>Category:{category}</Heading>
        <Heading>{title}</Heading>
        <Text fontSize={"md"}>{content}</Text>
      </VStack>
    </HStack>
  );
}
