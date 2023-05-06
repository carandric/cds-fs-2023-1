
import styled from "styled-components";
import {TopbarHeight} from "../../globalStyles.js";

export const TopbarContainer = styled.header`
  display: flex;
  /* background-color: aqua; */
  border-bottom: 2px solid #ccc;
  padding: 5px 10px;
  position:fixed;
  left:0px;
  top:0px;
  background-color: #fff;
  width:100%;
  height:${TopbarHeight}px;
`;


export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  svg {
    font-size: 1.2em;
  }
`;

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1.6em;
  }
  &:hover {
    color: #666;
    cursor: pointer;
  }
`;
