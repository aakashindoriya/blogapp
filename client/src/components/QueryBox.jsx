import { HStack, Input, Select } from "@chakra-ui/react";
import React from "react";

export default function QueryBox({ query, handleQuery }) {
  return (
    <HStack maxW={"80%"} gap="5" p="5" m="auto">
      <Input
        placeholder="seach from title"
        name="title"
        value={query.title}
        onChange={handleQuery}
      />
      <Select
        name="category"
        placeholder="category"
        value={query.category}
        onChange={handleQuery}
      >
        <option value="tech">TECH</option>
        <option value="education">EDUCATION</option>
        <option value="health">HEALTH</option>
      </Select>
    </HStack>
  );
}
