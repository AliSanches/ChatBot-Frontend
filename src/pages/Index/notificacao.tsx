import { IoNotifications } from "react-icons/io5";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../../components/ui/menu";
import { Circle, Float } from "@chakra-ui/react";

export const Notificacao = () => {
  return (
    <>
      <MenuRoot positioning={{ placement: "left-start" }}>
        <MenuTrigger asChild>
          <button
            style={{
              position: "relative",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              outline: "transparent",
            }}
          >
            <IoNotifications size={25} />
            <Float placement={"top-end"} offset="2">
              <Circle size="4" bg="red" color="white">
                1
              </Circle>
            </Float>
          </button>
        </MenuTrigger>
        <MenuContent background={"#ffffff"}>
          <MenuItem color={"#000000"} value="new-txt">
            Nenhuma notificação no momento...
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
};
