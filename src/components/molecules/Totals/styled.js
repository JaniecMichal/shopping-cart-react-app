import styled from 'styled-components';

export const TotalsWrapper = styled.section`
  margin-top: 20px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.mercury};
  border: 2px solid ${({ theme }) => theme.colors.grey};
`;

export const StyledHeader = styled.header`
  padding: 10px 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

export const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.big};
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.alabaster};
`;
