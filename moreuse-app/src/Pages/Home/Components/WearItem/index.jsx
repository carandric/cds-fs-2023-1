import { Link } from "react-router-dom";
import { WearItemContainer, WearItemImage } from "./styles";

export const WearItem = ({ _id, image, name, target, gender, price }) => {
  return (
    <Link to={`/wear-detail/${_id}`}>
      {/* // <div> //Se cambia la etiqueta html por el componente react */}
      <WearItemContainer>
        {/* <div> */}
        <WearItemImage>
          <div>
            <img width="100px" alt="wear" src={image} />
          </div>
        </WearItemImage>
        {/* </div> */}
        <h3>{name}</h3>
        <h5> {target} / {gender==='F' ? 'Niña':'Niño'}</h5>
        <h4>{price}</h4>
      </WearItemContainer>
      {/* // </div> */}
    </Link>
  );
};
