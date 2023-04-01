
import {IoMenu} from "react-icons/io5";
import { MenuContainer, TopbarContainer } from "./styles";

export const Topbar = () => {

  return (
    // <header>
    <TopbarContainer>
      <MenuContainer>
        <IoMenu />
      </MenuContainer>
      <div>
        <img src="assets/logo.png" alt="logo" width="100px" />
      </div>
    </TopbarContainer>
    // </header>
  )
}
