import { Flex, Input, Box, Image } from "@chakra-ui/react";
import { InputGroup } from "../../components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { AddContato } from "./addContato";
import { BreadcrumbLink, BreadcrumbRoot } from "../../components/ui/breadcrumb";
import { LiaSlashSolid } from "react-icons/lia";

import imgChatBot from "/public/chatbot.webp";

export const Atendimento = () => {
  return (
    <Flex h={"93.5vh"} color={"#000"}>
      <Box
        w={{ base: "100%", sm: "100%", md: "70%", xl: "25%" }}
        background={"#ffffff"}
        py={8}
        shadow={"sm"}
        zIndex={2}
      >
        <Flex
          w={"90%"}
          h={"35px"}
          gap={3}
          paddingX={{ base: "32px", md: "0" }}
          mb={5}
          mx={"auto"}
        >
          <InputGroup flex="1" startElement={<LuSearch />}>
            <Input borderRadius={"20px"} placeholder="Pesquisar" />
          </InputGroup>

          <AddContato />
        </Flex>

        <Flex justifyContent={"center"}>
          <BreadcrumbRoot separator={<LiaSlashSolid />}>
            <BreadcrumbLink href="#">ATENDIMENTO</BreadcrumbLink>
            <BreadcrumbLink href="#">FILA ESPERA</BreadcrumbLink>
            <BreadcrumbLink href="#">POTENCIAIS</BreadcrumbLink>
          </BreadcrumbRoot>
        </Flex>
      </Box>

      {/* Conteudo do Atendimento */}
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        background={"#f3f3f3"}
        w={{ md: "75%" }}
        display={{ base: "none", md: "flex" }}
      >
        <Image src={imgChatBot} alt={imgChatBot} h={"300px"} />
      </Flex>
    </Flex>
  );
};
