import React from 'react';
import { useSelector } from 'react-redux';
import removeIcon from 'assets/images/removeIcon.png';
import { Detail, Wrapper } from './styled';
import Quantity from 'components/atoms/Quantity';
import { selectLoading } from 'views/productsSlice';
import { Button } from 'components/atoms/Button';

const ProductDetails = ({ product, productsDetails }) => {
  const loading = useSelector(selectLoading);
  console.log(product);
  console.log(productsDetails);

  if (!loading && !!productsDetails) {
    return (
      <Wrapper>
        <Button itemAction>
          <img src={removeIcon} alt="removeIcon" />
        </Button>

        <img src={productsDetails.image} alt="productIcon" />

        <Detail>{productsDetails.name}</Detail>

        <Detail>${productsDetails.price.toFixed(2)}</Detail>

        <Quantity productQuantity={product.quantity} />
      </Wrapper>
    );
  }

  return <h1>Loading...</h1>;
};

export default ProductDetails;
