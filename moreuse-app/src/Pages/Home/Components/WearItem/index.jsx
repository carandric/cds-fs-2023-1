import { Link } from "react-router-dom";
import { WearItemContainer, WearItemImage } from "./styles";

export const WearItem = ({ _id, image, name, target, gender }) => {
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
        <h5>
          {target} / {gender}
        </h5>
      </WearItemContainer>
      {/* // </div> */}
    </Link>
  );
};
