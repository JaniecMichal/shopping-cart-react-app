import React from 'react';
import editQtyIcon from 'assets/images/editQtyIcon.png';
import { Wrapper, QuantityValue } from './styled';
import { Button } from 'components/atoms/Button';

const Quantity = () => {
  return (
    <Wrapper>
      <Button quantity>-</Button>
      <QuantityValue type="number" />
      <Button quantity>+</Button>
      <img src={editQtyIcon} alt="productIcon" />
    </Wrapper>
  );
};

export default Quantity;
