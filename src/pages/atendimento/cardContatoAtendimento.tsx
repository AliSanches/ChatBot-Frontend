import { Flex, Button, Text } from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar";
import { DadosContatoAtendimento } from "./types/CardContatoAtendimento";

export const CardContatoAtendimento: React.FC<DadosContatoAtendimento> = ({
  dados,
  abrirChat,
}) => {
  return (
    <>
      <Button
        display={"flex"}
        justifyContent={"initial"}
        gap={3}
        onClick={() => abrirChat(dados.id)}
        cursor={"pointer"}
        h={"70px"}
        px={3}
        _hover={{ background: "#f7f7f7" }}
        borderBottom={"#f7f7f7 1px solid"}
      >
        <Avatar
          name="Random"
          colorPalette="pink"
          src="https://randomuser.me/api/portraits/men/42.jpg"
        />
        <Flex flexDirection={"column"} textAlign={"initial"}>
          <Text color={"#61667b"}>{dados.nome}</Text>
          <Text color={"#999ca5"}>{dados.telefone}</Text>
        </Flex>
      </Button>
    </>
  );
};
