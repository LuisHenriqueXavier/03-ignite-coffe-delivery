import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
  align-items: center; 
`;


export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${props => props.theme['purple-light']};

    svg {
      color: ${props => props.theme.purple};
    }

    span {
      color: ${props => props.theme['purple-dark']};
    }

    padding: 10px 8px;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    padding: 8px;
    border-radius: 6px;

    position: relative;
  }`