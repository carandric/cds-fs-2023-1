
import {Link} from "react-router-dom";
import { MenuCloseWrapper, MenuContainer, MenuItemsWrapper } from "./styles";
import {IoClose} from "react-icons/io5";

const OptionsMenu = [
  {
    name: "Inicio",
    path: "/"
  },
  {
    name: "Perfil",
    path: "/profile"
  },
  {
    name: "Mis prendas",
    path: "/my-clothes"
  }
]


export const Menu = () => {

  return (
    // <section>
    <MenuContainer>
      <MenuCloseWrapper>
        <IoClose/>
      </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item, index) => (
            <Link key={index} to={item.path}><li>{item.name}</li></Link>
            ))
          }
      </MenuItemsWrapper>
    </MenuContainer>
    // </section>
  )
}
