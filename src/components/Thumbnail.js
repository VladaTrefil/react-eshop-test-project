import React from 'react';
import styled from 'styled-components';

const ImageHolder = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-bottom: ${(200 / 280) * 100}%;
  }

  ${({ styles }) => styles}
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Thumbnail({ src, styles }) {
  return (
    <ImageHolder styles={styles}>
      <Image src={src} />
    </ImageHolder>
  );
}
