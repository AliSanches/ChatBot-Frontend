import { Flex, Input, Box, Image } from "@chakra-ui/react";
import { InputGroup } from "../../components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { AddContato } from "./addContato";
import { useState } from "react";
import { DadosChat } from "./types/typesArray";
import { CardContatoAtendimento } from "./cardContatoAtendimento";
import { DadosContato } from "./dadosContato";
import imgChatBot from "/public/chatbot.webp";

export const Atendimento = () => {
  const dadosDeChats: Array<DadosChat> = [
    {
      id: 1,
      nome: "MAZALI Veronica",
      mensagens: ["Oi, como você está?", "asdasd", "Testando novamente!"],
      telefone: "19 99823-9872",
    },
    {
      id: 2,
      nome: "TRANSBOM Marcio",
      mensagens: ["Oi, tem novidades?", "Não muito, e você?"],
      telefone: "19 99834-2344",
    },
  ];

  const [chatAtual, setChatAtual] = useState<boolean | any>(null);

  const abrirChat = (id: number) => {
    const chat = dadosDeChats.find((d) => d.id === id);
    setChatAtual(chat);
  };

  const fecharChat = (fechar: null) => {
    setChatAtual(fechar);
  };

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
            <Input
              borderRadius={"20px"}
              placeholder="Pesquisar"
              borderColor={"#999ca5"}
            />
          </InputGroup>

          <AddContato />
        </Flex>

        <Flex justifyContent={"center"} flexDirection={"column"}>
          {dadosDeChats.map((dados) => (
            <CardContatoAtendimento
              key={dados.id}
              dados={dados}
              abrirChat={abrirChat}
            />
          ))}
        </Flex>
      </Box>

      {/* Conteudo do Atendimento/ Chat aberto */}
      <Flex
        alignItems={"end"}
        background={"#f3f3f3"}
        w={{ md: "75%" }}
        display={{ base: "none", md: "flex" }}
      >
        {chatAtual ? (
          <DadosContato dados={chatAtual} fecharChat={fecharChat} />
        ) : (
          <Flex
            justifyContent={"center"}
            w={"100%"}
            h={"100%"}
            alignItems={"center"}
          >
            <Image src={imgChatBot} alt={imgChatBot} h={"300px"} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
