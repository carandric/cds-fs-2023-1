import { Link } from "react-router-dom";
import { MenuCloseWrapper, MenuContainer, MenuItemsWrapper } from "./styles";
import { IoClose } from "react-icons/io5";
import { MenuContext } from "../../Contexts/MenuContext";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const OptionsMenu = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Inicio",
    path: "/",
    authRequired: true
  },
  {
    name: "Perfil",
    path: "/profile",
    authRequired: true
  },
  {
    name: "Mis prendas",
    path: "/my-clothes",
    authRequired: true
  },
  {
    name: "Iniciar Sesión",
    path: "/login"
  },
  {
    name: "Cerrar Sesión",
    path: "/logout",
    authRequired: true
  }
];

export const Menu = () => {

  const { menuState, onChangeOpenCloseMenu } = useContext(MenuContext);
  const {user} = useContext(UserContext);

  return (
    // <section>
    <MenuContainer isShown={menuState.isOpen}>
      <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
        <IoClose />
      </MenuCloseWrapper>
      <MenuItemsWrapper>
        {OptionsMenu.map((item, index) => {
              if (user.isAuth && item.authRequired) {
                return <Link key={index} to={item.path}><li>{item.name}</li></Link>
              }
              if (!user.isAuth && !item.authRequired) {
                return <Link key={index} to={item.path}><li>{item.name}</li></Link>
              }
            }
          )
        }
      </MenuItemsWrapper>
    </MenuContainer>
    // </section>
  );
};
