import React from 'react';
import Thumbnail from './Thumbnail';
import Price from './Price';

import { Button } from '@material-ui/core';

const ProductCard = ({ product, onAddButtonClick }) => {
  return (
    <div>
      <Thumbnail src={product.images.color} />
      <h3>{product.name}</h3>
      <Price price={product.price} />
      <Button onClick={() => onAddButtonClick(product.id, 1)} variant="contained" color="primary">
        add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
