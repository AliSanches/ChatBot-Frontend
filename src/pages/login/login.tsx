import { Flex } from "@chakra-ui/react";
import style from "./login.module.css";
import chatbot from "/chatbot.webp";
import { Image } from "@chakra-ui/react";
import { BtnLoginMobile } from "./btnLoginMobile";
import { LateralDireitaDesktop } from "./lateralDireitaDesktop";

export const Login = () => {
  return (
    <Flex
      h={"100vh"}
      w="100vw"
      gap={"35%"}
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={"center"}
      justifyContent={{ base: "end", lg: "initial" }}
      className={style.bg}
    >
      <Flex
        borderRadius={{ base: "0", lg: "20px" }}
        shadow={{ base: "none", lg: "md" }}
        background={{ base: "none", lg: "#ffffff" }}
        gap={{ base: "270px", lg: "0" }}
        justifyContent={{ base: "end", lg: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
        mx={{ base: "none", lg: "auto" }}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mx={"auto"}
          gap={10}
          className={style.lateral}
          px={{ base: "0", lg: "10px" }}
          py={{ base: "0", lg: "20px" }}
          w={{ base: "auto", lg: "500px" }}
          borderLeftRadius={"20px"}
        >
          <div>
            <h1 className={style.title}>Bem vindo</h1>
          </div>
          <div>
            <Image src={chatbot} alt={chatbot} w={"180px"} />
          </div>
          <Flex px={5} fontSize={14} textAlign={"center"} w={"320px"}>
            O DvBot é um sistema de chat inteligente, similar ao WhatsApp,
            focado em automação e atendimento rápido.
          </Flex>
        </Flex>

        <Flex display={{ base: "flex", lg: "none" }} justifyContent={"center"}>
          <BtnLoginMobile />
        </Flex>

        <LateralDireitaDesktop />
      </Flex>
    </Flex>
  );
};
