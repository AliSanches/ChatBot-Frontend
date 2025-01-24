import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { Flex } from "@chakra-ui/react";
import { MdMessage } from "react-icons/md";

export const ChatInterno = () => {
  return (
    <DrawerRoot placement={"end"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <button
          style={{
            width: "auto",
            color: "#ffffff",
            cursor: "pointer",
            padding: "0 10px",
          }}
        >
          <MdMessage size={25} />
        </button>
      </DrawerTrigger>
      <DrawerContent
        offset="4"
        rounded="md"
        minW={"100%"}
        background={"#ffffff"}
      >
        <DrawerBody>
          <Flex flexDirection="column" gap={10} py={10}></Flex>
        </DrawerBody>
        <DrawerCloseTrigger color={"red.500"} />
      </DrawerContent>
    </DrawerRoot>
  );
};
