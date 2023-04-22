import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { SignupContent } from "./styles";
import { useForm} from "react-hook-form";
import { emailExpRegular } from "../../Constants";

const Login = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmitLogin = (data) => {
    console.log("data", data);
  }

  return (
    <Page title="Ingresar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <FormControl>
            <label htmlFor="">Correo electrónico:</label>
            <input
              // type="text"
              type="email"
              {...register("emailAddress",
                // {required: true, pattern: /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z0-9]+/i }
                {required: true, pattern: emailExpRegular }
              )}/>
              {errors.emailAddress?.type === 'required' && <span>Campo requerido</span>}
              {errors.emailAddress?.type === 'pattern' && <span>Debes ingresar un correo válido</span>}
          </FormControl>
          <FormControl>
            <label htmlFor="">Contraseña:</label>
            <input type="password" {...register("password", {required: true, minLength: 8})}/>
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 8 caracteres</span>}
          </FormControl>
          <Button type="submit" text="Ingresar"/>
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
