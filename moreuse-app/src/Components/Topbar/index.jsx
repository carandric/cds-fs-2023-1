
import {IoMenu} from "react-icons/io5";
import { MenuContainer, TopbarContainer } from "./styles";
import { MenuContext } from "../../Contexts/MenuContext";
import { useContext } from "react";

export const Topbar = () => {

  // const isOpen = useContext(MenuContext);

  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext);

  const toggleMenu = () => {
    // alert("toggle menu");
    onChangeOpenCloseMenu();
  }

  return (
    // <header>
    <TopbarContainer>
      <MenuContainer onClick={toggleMenu}>
        <IoMenu />
      </MenuContainer>
      <div>
        <img src="/assets/logo.png" alt="logo" width="100px" />
      </div>
      <p>
        {/* {isOpen ? "abierto" : "cerrado"} */}
        {menuState.isOpen ? "abierto" : "cerrado"}
      </p>
    </TopbarContainer>
    // </header>
  )
}
