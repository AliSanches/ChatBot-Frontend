import { Avatar } from "../../components/ui/avatar";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../../components/ui/menu";
import { Button } from "@chakra-ui/react";
import { Notificacao } from "./notificacao";
import online from "/public/online.png";
import offline from "/public/offline.png";

export const AvatarProfile = () => {
  return (
    <>
      <Notificacao />

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
        <MenuContent background={"#ffffff"}>
          <MenuItem value="online" color={"#000000"}>
            <img src={online} alt={online} /> Online
          </MenuItem>
          <MenuItem value="offline" color={"#000000"}>
            <img src={offline} alt={offline} /> Offline
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
};
