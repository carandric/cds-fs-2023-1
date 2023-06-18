import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { SignupContent } from "./styles";
import { useForm} from "react-hook-form";
import { emailExpRegular } from "../../Constants";
import { httpRequest } from "../../Utils/HttpRequest";
import { Alert, ALERT_ICON } from "../../Components/Alert/Alert";
import { setToken } from "../../Utils/TokenLocalStorage";

const Login = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const navigate = useNavigate();

  const onSubmitLogin = (data) => {
    // console.log("data", data);
    validateUserRequest(data);
  }

  const validateUserRequest = async (data) => {
    try {
      const response = await httpRequest({
        endpoint: "/auth/login",
        body: data,
      });
      console.log(response);
      
      const {token} = response.data;
      setToken(token);

      Alert({
        icon: ALERT_ICON.SUCCESS,
        title:"Welcome",
        text:'Access succeded',
        callback: () => {
          navigate('/');
        }
      });

      // setTimeout(() => {
      //   navigate('/');
      // }, 2000);

    } catch (error) {
      console.error(error);
      Alert({icon: ALERT_ICON.ERROR, title:"Error", text:'Invalid credentials'});
    }
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
              {...register("email",
                // {required: true, pattern: /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z0-9]+/i }
                {required: true, pattern: emailExpRegular }
              )}/>
              {errors.email?.type === 'required' && <span>Campo requerido</span>}
              {errors.email?.type === 'pattern' && <span>Debes ingresar un correo válido</span>}
          </FormControl>
          <FormControl>
            <label htmlFor="">Contraseña:</label>
            <input type="password" {...register("password", {required: true, minLength: 6})}/>
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 6 caracteres</span>}
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
