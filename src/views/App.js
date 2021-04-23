import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MainWrapper } from 'components/atoms/MainWrapper';
import { MainHeader } from 'components/atoms/MainHeader';
import { Button } from 'components/atoms/Button';
import { Section } from 'components/atoms/Section';
import CostDetails from 'components/atoms/CostDetails';
import Totals from 'components/molecules/Totals';
import ProductsCart from 'components/organisms/ProductsCart';
import { selectProductsCart, selectSubTotal } from './productsSlice';
import { ConfirmationInfo } from 'components/atoms/ConfirmationInfo';

function App() {
  const subTotal = useSelector(selectSubTotal);
  const [orderIsConfirmed, setOrderIsConfirmed] = useState(false);
  const productsCart = useSelector(selectProductsCart);
  const [shippingCost, setShippingCost] = useState(23.8);
  const [grandTotal, setGrandTotal] = useState();

  useEffect(() => {
    if (productsCart.length < 1) {
      setShippingCost(0);
      setGrandTotal(0);
      return;
    }
    if (subTotal === 0) {
      setShippingCost(23.8);
      setGrandTotal(0);
      return;
    }
    if (subTotal > 100) {
      setShippingCost(0);
      setGrandTotal(subTotal);
      return;
    }
    setShippingCost(23.8);
    setGrandTotal(subTotal + shippingCost);
  }, [subTotal, shippingCost, productsCart]);

  const orderSubmitHandler = () => {
    console.log(orderIsConfirmed);
    setOrderIsConfirmed(!orderIsConfirmed);
  };

  return (
    <MainWrapper>
      <Section>
        <MainHeader>Shopping Cart</MainHeader>
        <Button
          onClick={() => orderSubmitHandler()}
          isConfirmed={orderIsConfirmed}
        >
          Proceed to checkout
        </Button>
      </Section>
      <Section details>
        {!orderIsConfirmed && (
          <>
            <ProductsCart />
            <Section costs>
              <CostDetails
                shipping
                costName={'shipping'}
                costValue={shippingCost}
              />
              <Totals
                subTotal={subTotal}
                grandTotal={grandTotal}
                orderSubmitHandler={orderSubmitHandler}
              />
            </Section>
          </>
        )}
        <ConfirmationInfo
          isConfirmed={orderIsConfirmed}
          emptyOrLow={subTotal === 0 ? true : false}
        >
          {subTotal === 0
            ? 'You have empty shopping cart or your subtotal is too low'
            : ' Your order has been submitted successfully'}
        </ConfirmationInfo>
      </Section>
    </MainWrapper>
  );
}

export default App;
