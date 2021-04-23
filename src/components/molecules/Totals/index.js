import React from 'react';
import CostDetails from 'components/atoms/CostDetails';
import { DetailsWrapper, StyledHeader, Title, TotalsWrapper } from './styled';
import { Button } from 'components/atoms/Button';

const Totals = ({ subTotal, grandTotal, orderSubmitHandler }) => {
  return (
    <TotalsWrapper>
      <StyledHeader>
        <Title>Cart totals</Title>
      </StyledHeader>
      <DetailsWrapper>
        <CostDetails costName={'subtotal'} costValue={subTotal} totals={true} />
        <CostDetails
          costName={'grand total'}
          costValue={grandTotal}
          totals
          last
        />
        <Button full onClick={() => orderSubmitHandler()}>
          Proceed to checkout
        </Button>
      </DetailsWrapper>
    </TotalsWrapper>
  );
};

export default Totals;
