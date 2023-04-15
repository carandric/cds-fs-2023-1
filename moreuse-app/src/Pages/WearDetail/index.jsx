import { Button } from '../../Components/Button';
import {Page} from '../../Components/Page';
import { WearDetailContainer, WearDetailContent, WearImageContainer } from './styles';

const WearDetail = () => {

  return (
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src="https://hmcolombia.vtexassets.com/arquivos/ids/1833172-483-725/Camisa-le%C3%B1adora-de-algodon---Red-Checked---H-M-CO.jpg?v=637928777918300000" />
        </WearImageContainer>
        <WearDetailContent>
          <h3>Camisa Leñadora</h3>
          <h4>2 meses / Masculino</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt perferendis laudantium quod tenetur voluptatibus molestiae odit explicabo! Nesciunt id quod reprehenderit. Veritatis unde quaerat nobis, voluptates nostrum accusamus vitae? Necessitatibus!
          </p>
        </WearDetailContent>
      </WearDetailContainer>
      <Button text="Comprar" />
    </Page>
  )
}

export default WearDetail;
