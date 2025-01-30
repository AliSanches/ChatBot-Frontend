import { Flex, Input, Box, Text } from "@chakra-ui/react";
import { Avatar } from "../../components/ui/avatar";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Dados } from "./types/DadosContato";

export const DadosContato: React.FC<Dados> = ({ dados, fecharChat }) => {
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      position={"relative"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Flex
        position={"static"}
        top={0}
        w={"100%"}
        h={"60px"}
        background={"#ffffff"}
        alignItems={"center"}
        px={5}
        gap={5}
        justifyContent={"space-between"}
      >
        <Flex gap={5} alignItems={"center"}>
          <Avatar
            name="Random"
            colorPalette="pink"
            src="https://randomuser.me/api/portraits/men/42.jpg"
          />
          <Box>
            <Text>{dados.nome}</Text>
            <Text>{dados.telefone}</Text>
          </Box>
        </Flex>
        <Box>
          <button
            style={{
              border: "none",
              outline: "none",
              cursor: "pointer",
              color: "#999ca5",
            }}
            onClick={() => fecharChat(null)}
          >
            <IoCloseCircleSharp size={30} />
          </button>
        </Box>
      </Flex>

      <Flex
        h={"100%"}
        px={3}
        gap={5}
        alignItems={"end"}
        justifyContent={"center"}
      >
        <Flex flexDirection={"column"} w={"45%"} pb={20}>
          {dados.mensagens.map((data) => (
            <Text key={data}>{data}</Text>
          ))}
        </Flex>
        <Flex flexDirection={"column"} w={"45%"} textAlign={"end"}>
          {dados.mensagens.map((msg, index) => (
            <Text key={index}>{msg}</Text>
          ))}
        </Flex>
      </Flex>

      <Flex
        position={"static"}
        bottom={0}
        w={"100%"}
        h={"60px"}
        background={"#ffffff"}
        justifyContent={"center"}
      >
        <Flex alignItems={"center"} w={"500px"}>
          <Input borderColor={"#999ca5"} />
        </Flex>
      </Flex>
    </Flex>
  );
};
