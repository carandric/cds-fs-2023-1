import { RouterProvider } from "react-router-dom";
import { MenuContextStore } from "./Contexts/MenuContext";
import { UserContextStore } from "./Contexts/UserContext";
import { GlobalStyle } from "./globalStyles";
import { router } from "./Routes/Router";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* Se carga el contexto a nivel de este componente que está arriba de la jerarquía */}
      <UserContextStore>
        <MenuContextStore>
          <RouterProvider router={router} />
        </MenuContextStore>
      </UserContextStore>
    </>
  );
};
