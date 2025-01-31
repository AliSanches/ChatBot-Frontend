import { Flex } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router";
import { Tooltip } from "../../components/ui/tooltip";
import { PiHeadsetFill } from "react-icons/pi";
import { TfiAgenda } from "react-icons/tfi";
import { FaTags } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import style from "./navegacao.module.css";

export const Navegacao = () => {
  return (
    <>
      <aside>
        <Flex>
          <Flex
            flexDirection={"column"}
            gap={10}
            h={"93.5vh"}
            w={"70px"}
            alignItems={"center"}
            background={"#ffffff"}
            py={8}
            zIndex={5}
            shadow={"sm"}
            display={{ base: "none", md: "flex" }}
          >
            <NavLink
              to="/index/dashboard"
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Tooltip
                content="Dashboard"
                positioning={{ placement: "right-end" }}
              >
                <GiProgression />
              </Tooltip>
            </NavLink>

            <NavLink
              to="/index/atendimento"
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Tooltip
                content="Atendimento"
                positioning={{ placement: "right-end" }}
              >
                <PiHeadsetFill />
              </Tooltip>
            </NavLink>

            <NavLink
              to={"/index/agenda"}
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Tooltip
                content="Agenda"
                positioning={{ placement: "right-end" }}
              >
                <TfiAgenda />
              </Tooltip>
            </NavLink>

            <NavLink
              to={"/index/atalho"}
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Tooltip
                content="Atalhos"
                positioning={{ placement: "right-end" }}
              >
                <MdMessage />
              </Tooltip>
            </NavLink>

            <NavLink
              to={"/index/tag"}
              className={({ isActive }) =>
                isActive ? `${style.nav} ${style.active}` : style.nav
              }
            >
              <Tooltip content="Tags" positioning={{ placement: "right-end" }}>
                <FaTags />
              </Tooltip>
            </NavLink>
          </Flex>
          <main style={{ width: "100vw", background: "#ffffff" }}>
            <Outlet />
          </main>
        </Flex>
      </aside>
    </>
  );
};
