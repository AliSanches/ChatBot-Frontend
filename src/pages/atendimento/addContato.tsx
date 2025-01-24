import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { MdAddCircleOutline } from "react-icons/md";
import { Flex, Input, Text, Button, Box } from "@chakra-ui/react";

export const AddContato = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <button
          style={{
            display: "flex",
            width: "auto",
            color: "#999ca5",
            cursor: "pointer",
          }}
        >
          <MdAddCircleOutline size={40} />
        </button>
      </DrawerTrigger>
      <DrawerContent
        offset="4"
        rounded="md"
        background={"#f8f8f8"}
        color={"#000"}
      >
        <DrawerHeader>
          <DrawerTitle>Adicionar Contato</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Flex flexDirection={"column"} gap={8}>
            <Box>
              <Text>Nome</Text>
              <Input variant="flushed" />
            </Box>
            <Box>
              <Text>Telefone</Text>
              <Input variant="flushed" />
            </Box>
            <Box>
              <Text>E-mail</Text>
              <Input variant="flushed" />
            </Box>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button background={"#999ca5"} color={"white"}>
              Cancelar
            </Button>
          </DrawerActionTrigger>
          <Button background={"#0596cd"} color={"white"}>
            Adicionar
          </Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
