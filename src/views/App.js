import React from 'react';
import { MainWrapper } from 'components/atoms/MainWrapper';
import { MainHeader } from 'components/atoms/MainHeader';
import { Button } from 'components/atoms/Button';
import { Section } from 'components/atoms/Section';
import CostDetails from 'components/atoms/CostDetails';
import Totals from 'components/molecules/Totals';
import ProductsCart from 'components/organisms/ProductsCart';

function App() {
  return (
    <MainWrapper>
      <Section>
        <MainHeader>Shopping Cart</MainHeader>
        <Button>Proceed to checkout</Button>
      </Section>
      <Section details>
        <ProductsCart />
        <Section costs>
          <CostDetails shipping costName={'shipping'} costValue={'$23.80'} />
          <Totals />
        </Section>
      </Section>
    </MainWrapper>
  );
}

export default App;
