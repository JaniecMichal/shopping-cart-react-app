import React from 'react';
import editQtyIcon from 'assets/images/editQtyIcon.png';
import { Wrapper, QuantityValue } from './styled';
import { Button } from 'components/atoms/Button';

const Quantity = ({ productQuantity }) => {
  return (
    <Wrapper>
      <Button quantity>-</Button>
      <QuantityValue type="number" defaultValue={productQuantity} />
      <Button quantity>+</Button>
      <Button itemAction>
        <img src={editQtyIcon} alt="productIcon" />
      </Button>
    </Wrapper>
  );
};

export default Quantity;
