import React, {createContext, useState} from "react";

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

  return(
    <UserContext.Provider value={{user, setAuthorization, removeAuthorization}}>
      {props.children}
    </UserContext.Provider>
  )
}
