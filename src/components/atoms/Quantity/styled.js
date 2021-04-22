import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const QuantityValue = styled.input`
  width: 60px;
  padding: 8px;
  border: 2px solid;
`;
