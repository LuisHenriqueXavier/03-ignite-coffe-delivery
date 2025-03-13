import styled from "styled-components";


export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CoffeeToBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  > label {
    font-size: 1rem;
    line-height: 1.3;
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  button {
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 0.5rem;
    gap: 0.5rem;
    border-radius: 6px;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

}
`;

export const AmountInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4.5rem;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme["base-button"]};
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
    border: 0;
    

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
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input {
    appearance: textfield;
    -moz-appearance: textfield;
  }
`;
