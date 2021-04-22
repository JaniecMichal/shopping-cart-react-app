import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MainWrapper } from 'components/atoms/MainWrapper';
import { MainHeader } from 'components/atoms/MainHeader';
import { Button } from 'components/atoms/Button';
import { Section } from 'components/atoms/Section';
import CostDetails from 'components/atoms/CostDetails';
import Totals from 'components/molecules/Totals';
import ProductsCart from 'components/organisms/ProductsCart';
import { selectSubTotal } from './productsSlice';

function App() {
  const subTotal = useSelector(selectSubTotal);
  const [shippingCost, setShippingCost] = useState(23.8);
  const [grandTotal, setGrandTotal] = useState(subTotal + shippingCost);

  useEffect(() => {
    if (subTotal > 100) {
      setShippingCost(0);
      setGrandTotal(subTotal);
    }
    return;
  }, [subTotal]);

  return (
    <MainWrapper>
      <Section>
        <MainHeader>Shopping Cart</MainHeader>
        <Button>Proceed to checkout</Button>
      </Section>
      <Section details>
        <ProductsCart />
        <Section costs>
          <CostDetails
            shipping
            costName={'shipping'}
            costValue={shippingCost}
          />
          <Totals subTotal={subTotal} grandTotal={grandTotal} />
        </Section>
      </Section>
    </MainWrapper>
  );
}

export default App;
