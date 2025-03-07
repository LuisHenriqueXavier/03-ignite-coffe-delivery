import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
  align-items: center;
  background-color: ${props => props.theme['white']}; 
  z-index: 1000; 
  box-shadow: 0px 4px 6px ${props => props.theme['purple-light']}; 
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

    > span{
      
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    line-height: 1.3;
    font-size: 0.75rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    
  }`