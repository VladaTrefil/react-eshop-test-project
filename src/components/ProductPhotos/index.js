import React from 'react';
import { Container, ImageHolder, Image } from './styles';

const ProductPhotos = ({ images }) => {
  console.log(images);
  return (
    <Container>
      <ImageHolder>
        <Image src={images.main} />
      </ImageHolder>
    </Container>
  );
};

export default ProductPhotos;
