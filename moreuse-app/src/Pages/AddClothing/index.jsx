import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page";
import { GENDERS, TARGETS } from "../../Constants";
import { FormContainer, FormControl } from "../../globalStyles";
import { useForm } from "react-hook-form";

const AddClothing = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmitAddClothing = (data) => {
    console.log("data", data);
  }

  return (
    <Page title="Adicionar prenda">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitAddClothing)} noValidate>
          <FormControl>
            <label>Imagen</label>
            <input type="url" {...register("image", {required: true})}/>
            {errors.image?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Nombre de la prenda</label>
            <input type="text" {...register("title", {required: true})}/>
            {errors.image?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <FormControl>
            <label>Público objetivo</label>
            <select {...register("target")}>
              {
                TARGETS.map( (item, key) => <option key={key} value={item}>{item}</option>)
              }
            </select>
          </FormControl>
          <FormControl>
            <label>Género</label>
            <select {...register("gender")}>
              {
                GENDERS.map( (item, key) => <option key={key} value={item.id}>{item.title}</option>)
              }
            </select>
          </FormControl>
          <FormControl>
            <label>Descripción</label>
            <textarea {...register("description", {required: true})}></textarea>
            {errors.description?.type === 'required' && <span>Campo requerido</span>}
          </FormControl>
          <Button type="submit" text="Guardar"/>
        </form>
      </FormContainer>
    </Page>
  )
}


export default AddClothing;
