import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import removeIcon from 'assets/images/removeIcon.png';
import { Detail, Wrapper, ProductIcon } from './styled';
import Quantity from 'components/atoms/Quantity';
import { removeProduct, selectLoading, setSubTotal } from 'views/productsSlice';
import { Button } from 'components/atoms/Button';

const ProductDetails = ({ product, productsDetails, updateSubTotal }) => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const removeHandle = () => {
    dispatch(removeProduct(product.productId));
    if (!product) dispatch(setSubTotal(0));
  };

  if (!loading && !!productsDetails) {
    return (
      <Wrapper>
        <Button itemAction onClick={() => removeHandle()}>
          <img src={removeIcon} alt="removeIcon" />
        </Button>

        <ProductIcon src={productsDetails.image} alt="productIcon" />

        <Detail>{productsDetails.name}</Detail>

        <Detail>${productsDetails.price.toFixed(2)}</Detail>

        <Quantity
          productQuantity={product.quantity}
          updateSubTotal={updateSubTotal}
          productId={product.productId}
        />
      </Wrapper>
    );
  }

  return <h1>Loading...</h1>;
};

export default ProductDetails;
