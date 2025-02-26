import styled from "styled-components";
import herobg from "../../assets/herobg.svg";

export const HeadingContainer = styled.div`
  background: url(${herobg}) no-repeat center;
  background-size: cover;
  max-height: 544px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.div`
  width: 100vw;
  padding: 0 160px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas iguais */

    > img {
        max-width: 476px;
        max-height: 360px;
    }
  `;

export const HeadingContent = styled.section`
display: grid;
grid-row-gap: 20px;

`

export const Article = styled.article`
  width: 588px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 130%;
      font-weight: 800;
      color: ${props => props.theme['base-title']};
  }

  > span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      font-weight: 400;
    color: ${props => props.theme['base-subtitle']}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`

export const CoffeeList = styled.main`
  padding: 32px 160px;

  > h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      line-height: 130%;
      font-weight: 800;
  }
`;