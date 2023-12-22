import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) =>
    setForm((prev) => {
      const field = e.target.getAttribute("name");
      prev[field] = e.target.value;
      return { ...prev };
    });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Center height={"100vh"} backgroundColor="teal">
      <Card padding={"15px"}>
        <CardHeader>
          <Heading size="lg" textAlign="center">
            Parking System
          </Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleFormSubmit} style={{ width: "270px" }}>
            <Stack spacing={7}>
              <FormControl>
                <Input
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Username"
                />
              </FormControl>
              <FormControl>
                <Input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                width="100%"
                borderRadius="15px"
              >
                Login
              </Button>

              <Text align="center">
                &copy; {new Date().getFullYear()} - Mitrateknik
              </Text>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </Center>
  );
};
