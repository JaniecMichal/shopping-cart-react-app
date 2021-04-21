import React from 'react';
import removeIcon from 'assets/images/removeIcon.png';
import productIcon from 'assets/images/headphones.png';
import { Detail, Wrapper } from './styled';
import Quantity from 'components/atoms/Quantity';

const ProductDetails = () => {
  return (
    <Wrapper>
      <img src={removeIcon} alt="removeIcon" />

      <img src={productIcon} alt="productIcon" />

      <Detail>Headphones</Detail>

      <Detail>$11.90</Detail>

      <Quantity />
    </Wrapper>
  );
};

export default ProductDetails;
