import { Flex, Text, HStack } from "@chakra-ui/react";
import { Navegacao } from "../navegacao/navegacao";
import { AvatarProfile } from "./avatar";

export const Index = () => {
  return (
    <>
      <header>
        <HStack
          h={"60px"}
          bg={"#738ed3"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <div>
            <Text px={4} fontWeight={"bold"} fontSize={"22px"}>
              ChatBot
            </Text>
          </div>
          <Flex pl={"auto"}>
            <AvatarProfile />
          </Flex>
        </HStack>
      </header>
      <Navegacao />
    </>
  );
};
