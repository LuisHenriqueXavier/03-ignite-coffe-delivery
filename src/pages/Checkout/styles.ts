import styled from "styled-components";

export const CheckoutContainer = styled.main`
    max-width: 70rem;
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

export const PaymentContent = styled(CheckoutDefault).attrs({ as: 'div' })`
    border-radius: 6px 44px 6px 44px;
`;