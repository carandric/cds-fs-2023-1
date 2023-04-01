
import {RouterProvider} from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import {router} from "./Routes/Router";


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}
