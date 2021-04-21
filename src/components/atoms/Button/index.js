import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}

  ${({ productsCart }) =>
    productsCart &&
    css`
      align-self: flex-end;
    `}

    ${({ quantity }) =>
    quantity &&
    css`
      width: 30px;
      padding: 8px;
      background-color: ${({ theme }) => theme.colors.mercury};
      border: 2px solid ${({ theme }) => theme.colors.mercury};
      color: ${({ theme }) => theme.colors.grey};
    `}

    ${({ itemAction }) =>
    itemAction &&
    css`
      padding: 0;
      background: transparent;
      border: none;
    `}
`;
