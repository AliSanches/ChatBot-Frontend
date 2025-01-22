import { Flex, Text, Button, HStack } from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";
import { Avatar } from "../../components/ui/avatar";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../../components/ui/menu";
import { Navegacao } from "../navegacao/navegacao";

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
            <MenuRoot positioning={{ placement: "left-start" }}>
              <MenuTrigger asChild>
                <Button
                  background={"transparent"}
                  color={"white"}
                  outline={"transparent"}
                >
                  <IoNotifications />
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="new-txt">
                  Nenhuma notificação no momento...
                </MenuItem>
              </MenuContent>
            </MenuRoot>

            <MenuRoot>
              <MenuTrigger asChild>
                <Button background={"transparent"} outline={"transparent"}>
                  <Avatar
                    name="Sasuke Uchiha"
                    src="https://bit.ly/broken-link"
                    colorPalette="teal"
                  />
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="online">Online</MenuItem>
                <MenuItem value="offline">Offline</MenuItem>
              </MenuContent>
            </MenuRoot>
          </Flex>
        </HStack>
      </header>
      <Navegacao />
    </>
  );
};
