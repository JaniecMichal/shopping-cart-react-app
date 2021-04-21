import styled from 'styled-components';

export const MainHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
`;
