import styled from 'styled-components';

export const LayoutContainer = styled.div`
    height: 100vh;
    background: ${props => props.theme.background};

    display: flex;
    flex-direction: column;
`;