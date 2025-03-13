import styled from "styled-components";


export const CheckoutContainer = styled.main`
    max-width: 70rem;
    width: 100%;
    margin: 9.5rem auto;
    display: grid;
    grid-template-columns: 1fr 28rem;
    height: 100%;
    gap: 2rem;

    section > h1 {
        font-family: 'baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: bold;
        color: ${props => props.theme["base-subtitle"]};
    }
`;

const CheckoutDefault = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding: 2.5rem;
    background-color: ${props => props.theme["base-card"]};
`;

export const AddressContent = styled(CheckoutDefault).attrs({ as: 'div' })`
    border-radius: 6px;

    div{
        display: flex;
        flex-direction: column;
    }

    > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    > div {
    
    > h2 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;

    }
    > span {
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: 400;
    }
}

    > svg {
        color: ${props => props.theme["yellow-dark"]};
    }
    }
`;

export const AddressForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 3.75rem; /* Terceira coluna menor para UF */
  margin-top: 2rem;
  gap: 1rem 0.75rem;

  > input{
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    line-height: 1.3;
    border: solid 1px ${props => props.theme["base-button"]}; 
    color: ${props => props.theme["base-label"]};
    background-color: ${props => props.theme["base-input"]};

    &:focus{
        border: solid 1px ${props => props.theme["yellow-dark"]};
    }
  }

  input:nth-child(1) { /* CEP ocupa linha inteira */
    grid-column: 1 / 2;
    
  }

  input:nth-child(2) { /* Rua ocupa linha inteira */
    grid-column: span 3;
  }

  input:nth-child(3) { /* Número */
    grid-column: span 1;
  }

  input:nth-child(4) { /* Complemento ocupa 2 colunas */
    grid-column: span 2;
  }

  input:nth-child(5), /* Bairro */
  input:nth-child(6) { /* Cidade */
    grid-column: span 1;
  }

  input:nth-child(7) { /* UF ocupa apenas um espaço */
    text-transform: uppercase;
    text-align: center;
  }
`;

export const PaymentMethod = styled(CheckoutDefault).attrs({ as: 'div'})`
  border-radius: 6px;
  gap: 2rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  > header {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    > svg {
        color: ${props => props.theme["purple-dark"]};
      }

    > div {
    
    > h2 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme["base-subtitle"]};

    }
    > span {
        font-size: 0.875rem;
        line-height: 1.3;
        font-weight: 400;
        color: ${props => props.theme["base-text"]};
    }
}
  }

  > footer {
    gap: 1.75rem;
    display: flex;
    flex-direction: row;

    > button {
      flex: 1;
      display: flex;
      gap: 0.75rem;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 6px;
      padding: 1rem;
      font-size: 0.75rem;
      line-height: 1.6;
      cursor: pointer;
      background-color: ${props => props.theme["base-button"]};

      &:hover {
            background-color: ${(props) => props.theme['base-hover']};
          }

      > svg {
        color: ${props => props.theme.purple};
      }

      &:focus{
        border: solid 1px ${props => props.theme.purple};
        background-color: ${props => props.theme["purple-light"]};
        color: ${props => props.theme.purple};
    }
    }
  }
`;

export const PaymentContent = styled(CheckoutDefault).attrs({ as: 'div' })`
    border-radius: 6px 44px 6px 44px;
`;


