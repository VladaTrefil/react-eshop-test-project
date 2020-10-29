import React from "react";
import { Card, Description, Title } from "./styles";

import Thumbnail from "#/Thumbnail";
import Price from "#/Price";

const ProductCard = ({ product }) => {
  return (
    <Card to={{ pathname: `${product.slug}` }}>
      <Thumbnail src={product.images.thumbnail} />
      <Description>
        <Title>{product.name}</Title>
        <Price price={product.price} />
      </Description>
    </Card>
  );
};

export default ProductCard;
