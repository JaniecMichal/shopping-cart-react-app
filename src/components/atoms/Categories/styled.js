import styled, { css } from 'styled-components';

export const CategoriesWrapper = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 80px 200px 1fr 1fr 1fr;
  grid-template-areas: 'RemoveImage ProductImage ProductName UnitPrice Qty';
  grid-gap: 24px;
  justify-items: start;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.scoripion};
  padding: 20px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mercury};
`;

export const Category = styled.p`
  margin: 0;
  max-width: 100%;

  ${({ name }) =>
    name &&
    css`
      grid-area: ProductName;
    `}
  ${({ unitPrice }) =>
    unitPrice &&
    css`
      grid-area: UnitPrice;
    `}
      ${({ quantity }) =>
    quantity &&
    css`
      grid-area: Qty;
    `}
`;
