import React from 'react';
import { Caption, Value, Wrapper } from './styled';

const CostDetails = ({ costName, costValue, totals, last }) => {
  return (
    <Wrapper totals={totals} last={last}>
      <Caption isUppercased={costName === 'shipping' ? true : false}>
        {costName}
      </Caption>
      <Value>{costValue}</Value>
    </Wrapper>
  );
};

export default CostDetails;
