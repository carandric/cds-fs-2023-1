
/*********************************************************************************/
/*Definición donde estaran las rutas*/
/*********************************************************************************/
import React, {Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";
import { LazyLoading } from "../Components/LazyLoading";
/*********************************************************************************/
//CAMBIAR POR CARGAS PEREZOSAS
// import {Home} from "../Pages/Home";
const Home = React.lazy(() => import("../Pages/Home")); //Coje por default el index
// import {WearDetail} from "../Pages/WearDetail";
const WearDetail = React.lazy(() => import("../Pages/WearDetail")); //Coje por default el index
const Signup = React.lazy(() => import("../Pages/Signup"));
const Profile = React.lazy(() => import("../Pages/Profile"));
const MyClothes = React.lazy(() => import("../Pages/MyClothes"));
const AddClothing = React.lazy(() => import("../Pages/AddClothing"));
// const Login = React.lazy(() => import("../Pages/Login"));
const Login = React.lazy(() => import('../Pages/Login')
// .then((module) => {
  //   return new Promise((resolve) => {
    //     setTimeout(() => {
      //       resolve(module);
      //     }, 5000)
      //   })
      // })
      );
//SUSPENSE
/*********************************************************************************/

/*Si no se exporta no es público*/
export const router = createBrowserRouter([
    {
        path: "/",
        element:(
          <Suspense fallback={<LazyLoading/>}>
            <Home />
          </Suspense>
        )
        //<Home />
    },
    {
      path: "/wear-detail/:id",
      element:(
        <Suspense fallback={<LazyLoading/>}>
          <WearDetail/>
        </Suspense>
      )
      //<WearDetail />
    },
    {
      path: "/login",
      element:(
        <Suspense fallback={<LazyLoading/>}>
          <Login />
        </Suspense>
      )
    },
    {
      path: "/signup",
      element:(
        <Suspense fallback={<LazyLoading/>}>
          <Signup/>
        </Suspense>
      )
    },
    {
      path: "/profile",
      element:(
        <Suspense fallback={<LazyLoading/>}>
          <Profile/>
        </Suspense>
      )
    },
    {
      path: "/my-clothes",
      element:(
        <Suspense fallback={<LazyLoading/>}>
          <MyClothes/>
        </Suspense>
      )
    },
    {
      path: "/add-clothing",
      element:(
        <Suspense fallback={<LazyLoading/>}>
          <AddClothing/>
        </Suspense>
      )
    }
]);
