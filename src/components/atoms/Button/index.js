import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSize.normal};

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`;
