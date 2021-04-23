import styled, { css } from 'styled-components';

export const ConfirmationInfo = styled.h2`
  color: ${({ theme }) => theme.colors.apple};
  fontsize: ${({ theme }) => theme.fontSize.big};
  display: none;

  ${({ isConfirmed }) =>
    isConfirmed &&
    css`
      display: inherit;

      ${({ emptyOrLow }) =>
        emptyOrLow &&
        css`
          color: ${({ theme }) => theme.colors.crimson};
        `}
    `}
`;
