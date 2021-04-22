import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from 'components/atoms/Section';
import { Button } from 'components/atoms/Button';
import Categories from 'components/atoms/Categories';
import ProductDetails from 'components/molecules/ProductDetails';
import { ProductsListWrapper } from './styled';
import {
  fetchProductsCart,
  fetchProductsData,
  selectProductsCart,
  selectProductsData,
  setSubTotal,
} from 'views/productsSlice';

const ProductsCart = () => {
  const productsCart = useSelector(selectProductsCart);
  const productsData = useSelector(selectProductsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsCart());
    dispatch(fetchProductsData());
  }, [dispatch]);

  const calculateSubTotal = () => {
    const productToSum = productsCart.map((product) => {
      const selectedProductDetails = productsData.find(
        ({ id }) => id === product.productId
      );
      return product.quantity * selectedProductDetails.price;
    });
    const totalSum = productToSum.reduce(function (a, b) {
      return a + b;
    });
    return totalSum;
  };

  const updateSubTotal = () => {
    const sum = calculateSubTotal();
    dispatch(setSubTotal(sum));
  };

  if (productsCart.length > 0) {
    return (
      <Section productsCart>
        <ProductsListWrapper>
          <Categories />
          {!!productsCart.length &&
            productsCart.map((product) => {
              const selectedProductDetails = productsData.find(
                ({ id }) => id === product.productId
              );
              return (
                <ProductDetails
                  key={product.productId}
                  product={product}
                  productsDetails={selectedProductDetails}
                  updateSubTotal={updateSubTotal}
                />
              );
            })}
        </ProductsListWrapper>
        <Button productsCart onClick={() => updateSubTotal()}>
          Update Shopping Cart
        </Button>
      </Section>
    );
  }
  return (
    <Section productsCart>
      <h1>Shopping cart is empty 😥</h1>
    </Section>
  );
};

export default ProductsCart;
