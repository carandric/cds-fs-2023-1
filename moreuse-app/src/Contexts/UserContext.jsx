import React, {createContext, useState} from "react";
import { HTTP_METHODS, httpRequest } from "../Utils/HttpRequest";
import { getToken, removeToken } from "../Utils/TokenLocalStorage";
import { useEffect } from "react";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  phone: "",
  address: ""
};

export const UserContext = createContext(initialState);

export const UserContextStore = (props) => {

  const [user, setUser] = useState(initialState);

  const setAuthorization = (userData) => {
    setUser({...userData, isAuth: true});
  }

  const removeAuthorization = () => {
    setUser(initialState);
  }

  /*
  useEffect(() => {
    validateSession();
  }, []); // los corchetes indican que solo lo haga la primera vez
  */

  const validateSession = () => {
    const token =  getToken();
    if (token && !user.isAuth) {
      requestUser();
    }
  }

  const requestUser = async () => {
    try {

      const response = await httpRequest({
        method: HTTP_METHODS.GET,
        endpoint:'/auth',
        token: getToken()
      });

      const {data} = response;
      setAuthorization(data);

    } catch (error) {
      console.error('requestUser', error);
      removeAuthorization();
      removeToken();
    }
  }

  return(
    <UserContext.Provider value={{user, validateSession, removeAuthorization}}>
      {props.children}
    </UserContext.Provider>
  )
}
