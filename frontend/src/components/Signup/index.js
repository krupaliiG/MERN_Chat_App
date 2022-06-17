import React from "react";
import { useState } from "react";
import { VStack } from "@chakra-ui/layout";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [image, setImage] = useState("");

  const onPasswordShowHide = () => setShow(!show);

  return (
    <VStack>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Set password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={onPasswordShowHide}>{show ? "Hide" : "Show"}</Button>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <Button onClick={onPasswordShowHide}>{show ? "Hide" : "Show"}</Button>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Choose Profile pic:</FormLabel>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </FormControl>
      <Button w="100%" colorScheme="blue">
        Register
      </Button>
    </VStack>
  );
};

export default Signup;
