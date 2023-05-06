import {Page} from "../../Components/Page";
import { Content } from "../../globalStyles";

const Profile = () => {
  return (
    <Page title="Perfil">
      <Content>
        <h4>Nombre</h4>
        <p>Carlitos</p>
        <h4>Correo electrónicos</h4>
        <p>carlitos@rb.com</p>
        <h4>Direccion</h4>
        <p>Calle 77</p>
        <h4>Teléfono</h4>
        <p>3001234567</p>
      </Content>
    </Page>
  )
}

export default Profile;
