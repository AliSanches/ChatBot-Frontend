import { Flex, Box, Input, Button } from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
import { InputGroup } from "../../components/ui/input-group";
import { LuSearch } from "react-icons/lu";

import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

export const Agenda = () => {
  return (
    <Flex w={"100%"} h={"100%"} background={"#ffffff"} flexDirection={"column"}>
      <Box
        w={"95%"}
        h={"150px"}
        mx={"auto"}
        my={10}
        background={"#ffffff"}
        borderRadius={10}
        boxShadow={"sm"}
        color={"#000000"}
      >
        <Flex
          background={"#f7f7f7"}
          px={5}
          py={3}
          justifyContent={"space-between"}
        >
          <h1>Agenda de contatos</h1>

          <DialogRoot placement={"top"} motionPreset="slide-in-bottom">
            <DialogTrigger asChild>
              <button style={{ color: "#0596cd", cursor: "pointer" }}>
                <IoMdAddCircle size={30} />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar novo contato</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button>Save</Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        </Flex>

        <Flex mx={"auto"} w={"80%"} py={5}>
          <InputGroup flex="3" startElement={<LuSearch />}>
            <Input placeholder="Buscar contato" variant={"flushed"} />
          </InputGroup>
        </Flex>
      </Box>

      <Flex
        w={"95%"}
        h={"70%"}
        mx={"auto"}
        my={3}
        background={"#f9f9f9"}
        borderRadius={10}
        overflowY={"scroll"}
        color={"#000000"}
        boxShadow={"sm"}
        px={5}
        py={5}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          eaque fugit minus saepe nam modi pariatur rerum velit fugiat magnam,
          eius odit! Voluptatem repellendus earum saepe fugit. Neque minus
          inventore eum, accusamus corrupti architecto magnam, minima ratione
          odit atque quidem eos molestiae ducimus aperiam sint ab nisi ut. Eaque
          corporis, sint iusto odio aperiam eos magni! Dolorum, voluptatem.
          Cupiditate aliquam dolor velit in a laudantium adipisci aliquid illo
          odio. Iure enim praesentium rem tenetur voluptatum ullam, delectus
          explicabo. Accusamus vitae eum quisquam accusantium reprehenderit
          officia! Adipisci pariatur quibusdam sint minus voluptas dolor eos
          corporis explicabo porro laboriosam, impedit sapiente fugiat quis nisi
          voluptate dolores vel consequatur omnis est debitis? Nihil, distinctio
          dolores perspiciatis nostrum dolorem iusto. Atque reprehenderit est
          officiis nostrum quisquam doloribus numquam animi corporis
          necessitatibus? Ipsa nemo veritatis praesentium, deleniti architecto
          repellendus, officiis error ea quaerat deserunt pariatur accusantium
          maiores nobis magnam quo voluptatibus ipsam laborum. Accusantium
          quidem iusto animi, alias reprehenderit tenetur, consectetur rem
          soluta tempora vitae architecto placeat labore deleniti totam sequi?
          Veniam repellat sunt maiores soluta, corporis ullam consectetur
          obcaecati, nobis tempora voluptatem ipsam voluptatum quaerat?
          Asperiores tempora ex commodi ipsam, eaque assumenda ratione voluptate
          voluptatibus quia aliquid! Dolorum, numquam fugit eveniet qui
          accusantium debitis?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Excepturi eaque fugit minus saepe nam modi pariatur
          rerum velit fugiat magnam, eius odit! Voluptatem repellendus earum
          saepe fugit. Neque minus inventore eum, accusamus corrupti architecto
          magnam, minima ratione odit atque quidem eos molestiae ducimus aperiam
          sint ab nisi ut. Eaque corporis, sint iusto odio aperiam eos magni!
          Dolorum, voluptatem. Cupiditate aliquam dolor velit in a laudantium
          adipisci aliquid illo odio. Iure enim praesentium rem tenetur
          voluptatum ullam, delectus explicabo. Accusamus vitae eum quisquam
          accusantium reprehenderit officia! Adipisci pariatur quibusdam sint
          minus voluptas dolor eos corporis explicabo porro laboriosam, impedit
          sapiente fugiat quis nisi voluptate dolores vel consequatur omnis est
          debitis? Nihil, distinctio dolores perspiciatis nostrum dolorem iusto.
          Atque reprehenderit est officiis nostrum quisquam doloribus numquam
          animi corporis necessitatibus? Ipsa nemo veritatis praesentium,
          deleniti architecto repellendus, officiis error ea quaerat deserunt
          pariatur accusantium maiores nobis magnam quo voluptatibus ipsam
          laborum. Accusantium quidem iusto animi, alias reprehenderit tenetur,
          consectetur rem soluta tempora vitae architecto placeat labore
          deleniti totam sequi? Veniam repellat sunt maiores soluta, corporis
          ullam consectetur obcaecati, nobis tempora voluptatem ipsam voluptatum
          quaerat? Asperiores tempora ex commodi ipsam, eaque assumenda ratione
          voluptate voluptatibus quia aliquid! Dolorum, numquam fugit eveniet
          qui accusantium debitis?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Excepturi eaque fugit minus saepe nam modi pariatur
          rerum velit fugiat magnam, eius odit! Voluptatem repellendus earum
          saepe fugit. Neque minus inventore eum, accusamus corrupti architecto
          magnam, minima ratione odit atque quidem eos molestiae ducimus aperiam
          sint ab nisi ut. Eaque corporis, sint iusto odio aperiam eos magni!
          Dolorum, voluptatem. Cupiditate aliquam dolor velit in a laudantium
          adipisci aliquid illo odio. Iure enim praesentium rem tenetur
          voluptatum ullam, delectus explicabo. Accusamus vitae eum quisquam
          accusantium reprehenderit officia! Adipisci pariatur quibusdam sint
          minus voluptas dolor eos corporis explicabo porro laboriosam, impedit
          sapiente fugiat quis nisi voluptate dolores vel consequatur omnis est
          debitis? Nihil, distinctio dolores perspiciatis nostrum dolorem iusto.
          Atque reprehenderit est officiis nostrum quisquam doloribus numquam
          animi corporis necessitatibus? Ipsa nemo veritatis praesentium,
          deleniti architecto repellendus, officiis error ea quaerat deserunt
          pariatur accusantium maiores nobis magnam quo voluptatibus ipsam
          laborum. Accusantium quidem iusto animi, alias reprehenderit tenetur,
          consectetur rem soluta tempora vitae architecto placeat labore
          deleniti totam sequi? Veniam repellat sunt maiores soluta, corporis
          ullam consectetur obcaecati, nobis tempora voluptatem ipsam voluptatum
          quaerat? Asperiores tempora ex commodi ipsam, eaque assumenda ratione
          voluptate voluptatibus quia aliquid! Dolorum, numquam fugit eveniet
          qui accusantium debitis?
        </p>
      </Flex>
    </Flex>
  );
};
