import React from 'react';
import { Caption, Value, Wrapper } from './styled';

const CostDetails = ({ costName, costValue, totals, last, shipping }) => {
  return (
    <Wrapper totals={totals} last={last} shipping={shipping}>
      <Caption isUppercased={costName === 'shipping' ? true : false}>
        {costName}
      </Caption>
      <Value>${!!costValue ? costValue.toFixed(2) : (0).toFixed(2)}</Value>
    </Wrapper>
  );
};

export default CostDetails;
