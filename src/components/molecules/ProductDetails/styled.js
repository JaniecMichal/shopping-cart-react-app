import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mercury};
`;

export const Detail = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.grey};
`;
