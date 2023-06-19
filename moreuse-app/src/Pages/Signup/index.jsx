import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page";
import { FormContainer, FormControl } from "../../globalStyles";
import { useNavigate } from "react-router-dom";
import { HTTP_METHODS, httpRequest } from "../../Utils/HttpRequest";
import { ALERT_ICON, Alert } from "../../Components/Alert/Alert";
import { emailExpRegular } from "../../Constants";


const Signup = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  // const navigate = useNavigate();

  const onSubmitSignup = (data) => {
    signupUserRequest(data);
  }

  const signupUserRequest = async (data) => {
    try {
      // console.log('Entro 1: ' + data);
      const response = await httpRequest({
        method: HTTP_METHODS.POST,
        endpoint: "/auth/signup",
        body: data
      });
      console.log(response);
      Alert({
        title: "Registration",
        text: "User registration is succeded",
        icon: ALERT_ICON.SUCCESS,
      });
    } catch (error) {
      console.log(error);
      Alert({
        title: "User registration error",
        text: error.message + " : " + error.response.data.message,
        icon: ALERT_ICON.ERROR
      });
    }
  }

  return (
    <Page title="Registrar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitSignup)} noValidate>
          <FormControl>
            <label>Nombre</label>
            <input type="text" {...register("name",{required:true})}/>
            {errors.name?.type==='required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Dirección</label>
            <input type="text" {...register("address")}/>
          </FormControl>
          <FormControl>
            <label>Teléfono</label>
            <input type="tel"  {...register("phone")}/>
          </FormControl>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email" {...register("email", {required: true, pattern: emailExpRegular})}/>
            {errors.email?.type === 'required' && <span>Campo requerido</span>}
            {errors.email?.type === 'pattern' && <span>Debes ingresar un correo válido</span>}
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password" {...register("password", {required: true, minLength: 6})}/>
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Mínimo 6 caracteres</span>}
          </FormControl>
          <Button type="submit" text="Registrar"/>
        </form>
      </FormContainer>
    </Page>
  );


}

export default Signup;
