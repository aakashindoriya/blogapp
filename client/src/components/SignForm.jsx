import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignUp } from "../redux/actions/auth.actions";
let init = {
  email: "",
  password: "",
  name: "",
};

export default function Signup() {
  const auth = useSelector((s) => s.auth);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setdata] = useState(init);
  const toast = useToast();
  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  async function HandleSignup() {
    dispatch(SignUp(data));
    setdata(init);
  }
  useEffect(() => {
    if (auth.isAuth) {
      toast({
        title: `Welcome to AI-Blogs`,
        description: "Registration successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      navigate("/");
    }
    if (auth.isError) {
      toast({
        title: `somthing went wrong`,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  }, [auth.isAuth, auth.isError]);
  return (
    <Flex
      minW={"100%"}
      align={"center"}
      justify={"center"}
      position="relative"
      bg="blue.200"
    >
      <Stack spacing={8} mx={"auto"} w={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            AI-Blogs
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            A New Place To Learn And Educate ♠
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                _focusVisible={{
                  borderColor: "green",
                }}
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>

              <InputGroup>
                <Input
                  _focusVisible={{
                    borderColor: "green",
                  }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={(e) => handleChange(e)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    _hover={{
                      bg: "transparent",
                    }}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={HandleSignup}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
