import { Flex } from "@chakra-ui/react";
import style from "./login.module.css";
import chatbot from "/public/chatbot.png";
import { Image } from "@chakra-ui/react";

export const Login = () => {
  return (
    <Flex h={"100vh"} w="100%" className={style.bg}>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mx={"auto"}
        gap={10}
      >
        <div>
          <h1>Bem Vindo</h1>
        </div>
        <div>
          <Image src={chatbot} alt={chatbot} w={"200px"} />
          <h2>DvBOT</h2>
        </div>
        <div>Teste</div>
      </Flex>
    </Flex>
  );
};
