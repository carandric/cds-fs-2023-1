import styled from  "styled-components";

export const MenuContainer = styled.section`
  border-right: 4px solid #2eaae2;
  width:300px;
  position: fixed;
  top: 0px;
  background-color: #2C2E83;
  height: 100%;
  /* display:none; //temporal */
  display: ${props => props.isShown ? 'block':'none'};
`;

export const MenuItemsWrapper = styled.ul`
  padding:20px 15px;

  a{
    color: #fff;
    text-decoration:none;
    :hover{
      color: #2eaae2;
    }
  }

  li {
    list-style:none;
    margin-top: 10px;
    font-size:1.3em;
  }

`;

export const MenuCloseWrapper = styled.div`
  display:flex;
  /* border: 1px solid red; */
  justify-content:right;
  padding: 20px;
  svg{
    color:#fff;
    font-size: 1.4em;
    cursor: pointer;
    &:hover{
      color:#2eaae2;
    }
  }
`;
