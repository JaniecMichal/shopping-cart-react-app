import React from 'react';
import { CategoriesWrapper, Category } from './styled';

const Categories = () => {
  return (
    <CategoriesWrapper>
      <Category>Product Name</Category>
      <Category>Unit Price</Category>
      <Category>Qty</Category>
    </CategoriesWrapper>
  );
};

export default Categories;
