import { Link } from "react-router-dom";
import { MenuCloseWrapper, MenuContainer, MenuItemsWrapper } from "./styles";
import { IoClose } from "react-icons/io5";
import { MenuContext } from "../../Contexts/MenuContext";
import { useContext } from "react";

const OptionsMenu = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Perfil",
    path: "/profile",
  },
  {
    name: "Mis prendas",
    path: "/my-clothes",
  },
  {
    name: "Iniciar sesión",
    path: "/login"
  },
];

export const Menu = () => {
  const { menuState, onChangeOpenCloseMenu } = useContext(MenuContext);

  return (
    // <section>
    <MenuContainer isShown={menuState.isOpen}>
      <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
        <IoClose />
      </MenuCloseWrapper>
      <MenuItemsWrapper>
        {OptionsMenu.map((item, index) => (
          <Link key={index} to={item.path}>
            <li>{item.name}</li>
          </Link>
        ))}
      </MenuItemsWrapper>
    </MenuContainer>
    // </section>
  );
};
