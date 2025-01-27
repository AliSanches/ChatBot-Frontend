import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { Flex, Input, Text, Button, Box } from "@chakra-ui/react";
import chatbot from "/chatbot.webp";
import style from "./login.module.css";
import { Checkbox } from "../../components/ui/checkbox";

export const BtnLoginMobile = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <button className={style.btnLogin}>Login</button>
      </DrawerTrigger>
      <DrawerContent
        offset="4"
        rounded="md"
        background={"#ffffff"}
        color={"#000"}
        position={"fixed"}
        top={0}
        left={0}
        borderRadius={0}
        minW={"100vw"}
        h={"100vh"}
      >
        <DrawerHeader p={0}>
          <Flex pt={12} justifyContent={"center"} className={style.bgLogin}>
            <img src={chatbot} alt={chatbot} className={style.logo} />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Flex
            flexDirection={"column"}
            gap={8}
            mx={"auto"}
            maxW={400}
            justifyContent={"center"}
          >
            <form>
              <Text fontWeight={"bold"} textAlign={"center"} fontSize={20}>
                Entrar com sua conta
              </Text>

              <Box pt={8}>
                <Text>E-mail</Text>
                <Input variant="flushed" />
              </Box>
              <Box>
                <Text>Senha</Text>
                <Input variant="flushed" type="password" />
              </Box>

              <Checkbox py={8} variant={"solid"} colorPalette={"blue"}>
                Não sou um robo
              </Checkbox>

              <Flex gap={5} justifyContent={"center"}>
                <DrawerActionTrigger asChild>
                  <Button
                    background={"#999ca5"}
                    color={"white"}
                    borderRadius={"20px"}
                    boxShadow={"sm"}
                    px={6}
                  >
                    Voltar
                  </Button>
                </DrawerActionTrigger>
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
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
