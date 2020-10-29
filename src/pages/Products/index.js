import React from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, PageTitle, FilterHolder } from './styles';
import Filter from '#/Filter';
import ProductGrid from '#/ProductGrid';

const Products = ({ products, categories }) => {
  const { category } = useParams();

  return (
    <Wrapper>
      <PageTitle>Products</PageTitle>
      <Filter categories={categories} />
      <ProductGrid products={products} />
    </Wrapper>
  );
};

export default Products;
