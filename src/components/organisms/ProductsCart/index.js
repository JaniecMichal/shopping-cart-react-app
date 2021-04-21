import React from 'react';
import { Section } from 'components/atoms/Section';
import { Button } from 'components/atoms/Button';
import Categories from 'components/atoms/Categories';
import ProductDetails from 'components/molecules/ProductDetails';
import { ProductsListWrapper } from './styled';

const ProductsCart = () => {
  return (
    <Section productsCart>
      <ProductsListWrapper>
        <Categories />
        <ProductDetails />
      </ProductsListWrapper>
      <Button productsCart>Update Shopping Cart</Button>
    </Section>
  );
};

export default ProductsCart;
