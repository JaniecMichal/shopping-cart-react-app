import React from 'react';
import { MainWrapper } from 'components/atoms/MainWrapper';
import { MainHeader } from 'components/atoms/MainHeader';
import { Button } from 'components/atoms/Button';
import { Section } from 'components/atoms/Section';
import CostDetails from 'components/atoms/CostDetails';
import Totals from 'components/molecules/Totals';

function App() {
  return (
    <MainWrapper>
      <Section>
        <MainHeader>Shopping Cart</MainHeader>
        <Button>Proceed to checkout</Button>
      </Section>
      <div>
        <CostDetails costName={'shipping'} costValue={'$23.80'} />
        <Totals />
      </div>
    </MainWrapper>
  );
}

export default App;
