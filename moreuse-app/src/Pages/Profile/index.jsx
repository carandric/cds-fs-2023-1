import { useContext } from "react";
import {Page} from "../../Components/Page";
import { UserContext } from "../../Contexts/UserContext";
import { Content } from "../../globalStyles";

const Profile = () => {

  const {user} = useContext(UserContext);
  
  return (
    <Page title="Perfil">
      <Content>
        <h4>Nombre</h4>
        <p>{user.name}</p>
        <h4>Correo electrónico</h4>
        <p>{user.email}</p>
        <h4>Dirección</h4>
        <p>{user.address}</p>
        <h4>Teléfono</h4>
        <p>{user.phone}</p>
      </Content>
    </Page>
  )
}

export default Profile;
