import { Flex, Text, HStack, Box } from "@chakra-ui/react";
import { Navegacao } from "../navegacao/navegacao";
import { AvatarProfile } from "./avatar";
import { MenuMobile } from "./menuMobile";

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
          <Box display={{ base: "block", md: "none" }}>
            <MenuMobile />
          </Box>

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
