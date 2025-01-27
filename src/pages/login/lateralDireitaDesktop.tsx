import { useState } from "react";
import { Checkbox } from "../../components/ui/checkbox";
import { Flex, Text, Box, Input, Button } from "@chakra-ui/react";

export const LateralDireitaDesktop = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const clear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Flex
      flexDirection={"column"}
      display={{ base: "none", lg: "flex" }}
      color={"#000000"}
      px={{ base: "0", lg: "10px" }}
      py={{ base: "0", lg: "20px" }}
      w={"350px"}
    >
      <Flex flexDirection={"column"} gap={8}>
        <Text fontWeight={"bold"} textAlign={"center"} fontSize={40}>
          Realizar login
        </Text>
        <form>
          <Box>
            <Text>E-mail</Text>
            <Input
              variant="flushed"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <Text>Senha</Text>
            <Input
              variant="flushed"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Checkbox pt={5} variant={"solid"} colorPalette={"blue"}>
            Não sou um robo
          </Checkbox>

          <Flex gap={5} mt={10} justifyContent={"center"}>
            <Button
              background={"#999ca5"}
              color={"white"}
              borderRadius={"20px"}
              boxShadow={"sm"}
              px={6}
              onClick={clear}
            >
              Limpar
            </Button>

            <Button
              borderRadius={"20px"}
              background={"#0596cd"}
              color={"white"}
              boxShadow={"sm"}
              px={6}
            >
              Login
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
