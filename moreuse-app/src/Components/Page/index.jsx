import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MenuContext } from "../../Contexts/MenuContext"
import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import { PageContainer, PageTitleContainer } from "./styles"
import { UserContext } from "../../Contexts/UserContext"

export const Page = (props) => {

  // const location = useLocation();
  const { onCloseMenu } = useContext(MenuContext);
  const { validateSession } = useContext(UserContext);

  //Escucha el cambio de estado de algo
  //Función anónima
  useEffect (() => {
    //unica vez al inicio del componente
    hideMenu();
    validateSession();
  }, []);

  const hideMenu = () => {
    onCloseMenu();
  }

  return(
    <PageContainer>
      <Topbar />
      {
        props.title && (
          <PageTitleContainer>
            <h1>{props.title}</h1>
          </PageTitleContainer>
        )
      }
      <div>
        {props.children}
      </div>
      <Menu />
    </PageContainer>
  )
}
