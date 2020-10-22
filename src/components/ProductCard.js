import React from 'react';
import styled from 'styled-components';

import Thumbnail from './Thumbnail';
import Price from './Price';
import AddToCart from './AddToCart';

const Card = styled.div`
  width: 100%;
  padding: 20px;
  outline: 1px solid grey;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ProductCard = ({ product, onAddButtonClick }) => {
  return (
    <Card>
      <Thumbnail src={product.images.thumbnail} styles={'margin-bottom: 15px;'} />
      <Title>{product.name}</Title>
      <Price price={product.price} styles={'margin-bottom: 25px;'} />
      <AddToCart id={product.id} />
    </Card>
  );
};

export default ProductCard;
