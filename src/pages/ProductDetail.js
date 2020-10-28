import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductBySlug } from '../helpers/products';
import styled from 'styled-components';
import ProductPhotos from '../components/ProductPhotos';
import ProductInfo from '../components/ProductInfo';

const Inner = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 50%;
`;

const ProductDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  const product = getProductBySlug(slug);
  console.log(product);

  return (
    <Inner>
      <Column>
        <ProductPhotos images={product.images} />
      </Column>
      <Column>
        <ProductInfo {...product} />
      </Column>
    </Inner>
  );
};

export default ProductDetail;
