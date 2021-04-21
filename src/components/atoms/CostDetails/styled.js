import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ totals }) =>
    totals &&
    css`
      padding: 10px 0;
      border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
    `}

  ${({ last }) =>
    last &&
    css`
      padding-bottom: 0;
      margin-bottom: 20px;
      border-bottom: none;
    `}
`;

export const Caption = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 700;
  text-transform: capitalize;

  ${({ isUppercased }) =>
    isUppercased &&
    css`
      text-transform: uppercase;
    `}
`;

export const Value = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 700;
`;
