import React from 'react';
import { CategoriesWrapper, Category } from './styled';

const Categories = () => {
  return (
    <CategoriesWrapper>
      <Category name={'name'}>Product Name</Category>
      <Category unitPrice={'unitPrice'}>Unit Price</Category>
      <Category quantity={'quantity'}>Qty</Category>
    </CategoriesWrapper>
  );
};

export default Categories;
