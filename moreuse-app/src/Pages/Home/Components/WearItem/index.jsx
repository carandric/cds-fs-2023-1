import { WearItemContainer, WearItemImage } from "./styles"

export const WearItem = ({image, name, target, gender}) => {
  return (
    // <div> //Se cambia la etiqueta html por el componente react
    <WearItemContainer>
      {/* <div> */}
      <WearItemImage>
        <div>
          <img width="100px" alt="wear" src={image} />
        </div>
      </WearItemImage>
      {/* </div> */}
      <h3>{name}</h3>
      <h5>{target} / {gender}</h5>
    </WearItemContainer>
    // </div>
  )
}
