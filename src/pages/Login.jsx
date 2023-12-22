import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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
import axios from "../lib/axios";
import { useNavigate } from "react-router-dom";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <Alert status="error">
      <AlertIcon />
      {error}
    </Alert>
  );
};

export default () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) =>
    setForm((prev) => {
      const field = e.target.getAttribute("name");
      prev[field] = e.target.value;
      return { ...prev };
    });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", form);
      const { user, token } = data;
      // TODO: taroh di store
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
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
              <ErrorMessage error={error} />
              <FormControl>
                <Input
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="Username"
                  isRequired
                />
              </FormControl>
              <FormControl>
                <Input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="Password"
                  isRequired
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
