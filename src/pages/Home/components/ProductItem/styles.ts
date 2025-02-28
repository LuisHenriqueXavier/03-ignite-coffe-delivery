import styled from "styled-components";

export const ProductItemContainer = styled.div`
  min-width: 256px;
  max-width: 300px;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  text-align: center;

  img {
    margin-top: -1.25rem;
  }

  h3 {
    font-family: 'baloo 2';

    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    margin: 0.5rem 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const Tags = styled.div`
  margin-top: 0.75rem;
  
  span {
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;
    margin-left: 0.25rem;
  }
`;

export const AddToCart = styled.div`
  display: flex; 
  align-items: center; /* Alinha verticalmente */
  gap: 8px; /* Espaçamento entre os elementos */
  width: 208px;
  margin: 2rem auto;
  
  justify-content: space-between;
  
  span {
    font-size: 0.875rem;
    font-weight: bold;
  }

  strong {
    font-size: 1.5rem;
    font-family: 'baloo 2';
    font-weight: bold;
    
    line-height: 1.3;
  }

  form {
    display: flex;
    align-items: center;
    gap: 8px;
  }

    button {
    background: ${(props) => props.theme["purple-dark"]};
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme["base-card"]};
    }

  }

`;

export const AmountInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4.5rem;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme["base-input"]};
  border-radius: 6px;

  form{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  button {
    background: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


    

    & svg{
      color: ${(props) => props.theme["purple-dark"]};
      text-decoration: none;
      border: 0;
    }
      & button:focus {
      outline: none;
    }
  }

  input {
    width: 20px;
    text-align: center;
    border: none;
    background: transparent;
    font-size: 1rem;
    font-weight: bold;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input {
    -moz-appearance: textfield;
  }
`;

