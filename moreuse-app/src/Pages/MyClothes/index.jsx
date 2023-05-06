import { useNavigate } from "react-router-dom"
import { Button } from "../../Components/Button"
import { Page } from "../../Components/Page"


const MyClothes = () => {

  const navigate = useNavigate();

  return (
    <Page title="Mis prendas">
      <Button text="Agregar una prenda" onPress={() => navigate("/add-clothing") }/>
      <section>
        <p>listado de prendas ...</p>
      </section>
    </Page>
  )
}

export default MyClothes;
