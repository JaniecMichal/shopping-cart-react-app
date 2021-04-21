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
} from 'views/productsSlice';

const ProductsCart = () => {
  const productsCart = useSelector(selectProductsCart);
  const productsData = useSelector(selectProductsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsCart());
    dispatch(fetchProductsData());
  }, [dispatch]);

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
              />
            );
          })}
      </ProductsListWrapper>
      <Button productsCart>Update Shopping Cart</Button>
    </Section>
  );
};

export default ProductsCart;
