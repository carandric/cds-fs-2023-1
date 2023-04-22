import styled from "styled-components";

const ButonStyled = styled.button`
  width: 100%;
  background-color: #2eaae2;
  color: #2c2e83;
  font-size: 1.2em;
  font-weight: 700;
  padding: 8px 8px;
  border-radius: 6px;
  opacity: 0.96;
  cursor: pointer;
  border: none;
  margin: 0 5px;
  &:hover{
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = ({text="", type, onPress}) => {
  return (
    <ButtonContainer>
      <ButonStyled type={type} onClick={onPress}>
        {text}
      </ButonStyled>
    </ButtonContainer>
  )
}

