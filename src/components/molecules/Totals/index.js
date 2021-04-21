import React from 'react';
import CostDetails from 'components/atoms/CostDetails';
import { DetailsWrapper, StyledHeader, Title, TotalsWrapper } from './styled';
import { Button } from 'components/atoms/Button';

const Totals = () => {
  return (
    <TotalsWrapper>
      <StyledHeader>
        <Title>Cart totals</Title>
      </StyledHeader>
      <DetailsWrapper>
        <CostDetails costName={'subtotal'} costValue={'$23.80'} totals={true} />
        <CostDetails
          costName={'grand total'}
          costValue={'$23.80'}
          totals
          last
        />
        <Button full>Proceed to checkout</Button>
      </DetailsWrapper>
    </TotalsWrapper>
  );
};

export default Totals;
