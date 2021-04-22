import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import editQtyIcon from 'assets/images/editQtyIcon.png';
import { Wrapper, QuantityValue } from './styled';
import { Button } from 'components/atoms/Button';
import { decreaseQuantity, increaseQuantity } from 'views/productsSlice';

const Quantity = ({ productQuantity, updateSubTotal, productId }) => {
  const [quantity, setQuantity] = useState(productQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(productQuantity);
  }, [productQuantity]);

  return (
    <Wrapper>
      <Button
        quantity
        onClick={() => dispatch(decreaseQuantity(productId))}
        disabled={productQuantity === 0 ? true : false}
      >
        -
      </Button>
      <QuantityValue
        readOnly
        min={1}
        type="number"
        value={quantity}
        onChange={({ target }) => setQuantity(target.value)}
      />
      <Button quantity onClick={() => dispatch(increaseQuantity(productId))}>
        +
      </Button>
      <Button itemAction onClick={() => updateSubTotal()}>
        <img src={editQtyIcon} alt="productIcon" />
      </Button>
    </Wrapper>
  );
};

export default Quantity;
