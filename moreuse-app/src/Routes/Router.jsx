
/*********************************************************************************/
/*Definición donde estaran las rutas*/
/*********************************************************************************/
import React, {Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
/*********************************************************************************/
//CAMBIAR POR CARGAS PEREZOSAS
// import {Home} from "../Pages/Home";
const Home = React.lazy(() => import("../Pages/Home")); //Coje por default el index
// import {WearDetail} from "../Pages/WearDetail";
const WearDetail = React.lazy(() => import("../Pages/WearDetail")); //Coje por default el index
//SUSPENSE
/*********************************************************************************/

/*Si no se exporta no es público*/
export const router = createBrowserRouter([
    {
        path: "/",
        element:(
          <Suspense fallback={<div>Cargando...</div>}>
            <Home />
          </Suspense>
        )
        //<Home />
    },
    {
      path: "/wear-detail",
      element:(
        <Suspense fallback={<div>Cargando...</div>}>
          <WearDetail />
        </Suspense>
      )
      //<WearDetail />
    }
])
