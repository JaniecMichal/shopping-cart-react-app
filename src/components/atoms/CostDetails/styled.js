import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  ${({ shipping }) =>
    shipping &&
    css`
      padding: 10px 20px;
      border: 2px solid ${({ theme }) => theme.colors.grey};
      background-color: ${({ theme }) => theme.colors.mercury};
    `}

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
