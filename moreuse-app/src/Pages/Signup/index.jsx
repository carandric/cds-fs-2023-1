import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";


const Signup = () => {
  return (
    <Page title="Registrar">
      <FormContainer>
        <form>
          <FormControl>
            <label>Nombre</label>
            <input type="text"/>
          </FormControl>
          <FormControl>
            <label>Dirección</label>
            <input type="text"/>
          </FormControl>
          <FormControl>
            <label>Teléfono</label>
            <input type="tel"/>
          </FormControl>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email"/>
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password"/>
          </FormControl>

          <Button text="Registrar"/>
        </form>
      </FormContainer>
    </Page>
  )
}

export default Signup;
