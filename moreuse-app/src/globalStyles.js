import styled, { createGlobalStyle } from "styled-components";

export const TopbarHeight = 45;

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  body{
    margin:0;
    padding:0;
    font-family: 'Monserrat', 'Helvetica';
  }
  a {
    color: #2c2e83;
    text-decoration: none;
  }
  a:hover{
    color: #2eaae2
  }
`;

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  form {
    width: 380px;
    /* border: 1px solid red; */
  }
`;

export const FormControl = styled.div`
  width: 100%;
  margin: 20px 0;
  label {
    width: 100%;
    display:block;
    text-align: center;
  }
  input{
    width: 100%;
    font-family: "Monserrat";
    font-size: 1.1em;
    border: 2px solid #2C2E83;
    padding: 10px 12px;
    text-align: center;
    border-radius: 4px;
  }
  span{
    color: red;
    font-size: 0.89em;
  }
`;

