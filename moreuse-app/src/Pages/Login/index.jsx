import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { SignupContent } from "./styles";

const Login = () => {
  return (
    <Page title="Ingresar">
      <FormContainer>
        <form>
          <FormControl>
            <label htmlFor="">Correo electrónico:</label>
            <input type="email"/>
          </FormControl>
          <FormControl>
            <label htmlFor="">Contraseña:</label>
            <input type="password"/>
          </FormControl>
          <Button text="Ingresar"/>
        </form>
      </FormContainer>

      <SignupContent>
        <p>¿Aún no tienes una cuenta?</p>
        <Link to="/signup">Registrarme</Link>
      </SignupContent>
    </Page>
  );
};

export default Login;
