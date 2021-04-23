import styled, { css } from 'styled-components';

export const Section = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ productsCart }) =>
    productsCart &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 20px;
      border: 1px solid ${({ theme }) => theme.colors.grey};
    `}

  ${({ costs }) =>
    costs &&
    css`
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
    `}

  ${({ details }) =>
    details &&
    css`
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 20px;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: 1fr;
      }
    `}
`;
