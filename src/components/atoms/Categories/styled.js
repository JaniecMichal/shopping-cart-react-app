import styled from 'styled-components';

export const CategoriesWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.scoripion};
  padding: 20px 10px;
  padding-left: 44%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mercury};
`;

export const Category = styled.p`
  margin: 0;
  margin-right: 80px;
`;
