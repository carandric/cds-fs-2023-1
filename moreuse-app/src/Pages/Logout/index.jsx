import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { removeToken } from "../../Utils/TokenLocalStorage";
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const {removeAuthorization} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    removeSession();
  }, []);

  const removeSession = () => {
    removeToken();
    removeAuthorization();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <p>Cerrando sesión</p>
  )
}

export default Logout;
