import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { Flex } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { PiHeadsetFill } from "react-icons/pi";
import { TfiAgenda } from "react-icons/tfi";
import { FaTags } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { NavLink } from "react-router";
import style from "../navegacao/navegacao.module.css";

export const MenuMobile = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <button
          style={{
            display: "flex",
            width: "auto",
            color: "#ffffff",
            cursor: "pointer",
            padding: "0 10px",
          }}
        >
          <IoMenu size={25} />
        </button>
      </DrawerTrigger>
      <DrawerContent
        offset="4"
        rounded="md"
        minW={"100%"}
        background={"#ffffff"}
      >
        <DrawerBody>
          <Flex flexDirection="column" gap={10} py={10}>
            <NavLink
              to="/index/atendimento"
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Flex gap={5}>
                <PiHeadsetFill />
                Atendimento
              </Flex>
            </NavLink>

            <NavLink
              to={"/index/agenda"}
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Flex gap={5}>
                <TfiAgenda />
                Agenda
              </Flex>
            </NavLink>

            <NavLink
              to={"/index/atalho"}
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Flex gap={5}>
                <MdMessage />
                Atalhos
              </Flex>
            </NavLink>

            <NavLink
              to={"/index/tag"}
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Flex gap={5}>
                <FaTags />
                Tags
              </Flex>
            </NavLink>
          </Flex>
        </DrawerBody>
        <DrawerCloseTrigger color={"red.500"} />
      </DrawerContent>
    </DrawerRoot>
  );
};
