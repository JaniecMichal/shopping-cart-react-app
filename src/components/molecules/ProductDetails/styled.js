import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 80px 200px 1fr 1fr 1fr;
  grid-gap: 24px;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mercury};
`;

export const Detail = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.grey};
`;

export const ProductIcon = styled.img`
  width: auto;
`;
