import { Flex } from "@chakra-ui/react";

export const Agenda = () => {
  return (
    <Flex w={"100%"} h={"100%"} background={"#ffffff"} flexDirection={"column"}>
      <Flex
        w={"95%"}
        h={"200px"}
        mx={"auto"}
        my={10}
        background={"#f9f9f9"}
        borderRadius={10}
      >
        <h1>Agenda</h1>
      </Flex>

      <Flex
        w={"90%"}
        h={"550px"}
        mx={"auto"}
        my={10}
        background={"#f9f9f9"}
        borderRadius={10}
        overflowY={"auto"}
      ></Flex>
    </Flex>
  );
};
