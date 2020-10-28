import React from 'react';
import styled from 'styled-components';

const ImageHolder = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-bottom: ${(260 / 320) * 100}%;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    background: ${({ theme }) => theme.colors.subtleLight};
  }

  ${({ styles }) => styles}
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 90%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
`;

export default function Thumbnail({ src, styles }) {
  return (
    <ImageHolder styles={styles}>
      <Image src={src} />
    </ImageHolder>
  );
}
