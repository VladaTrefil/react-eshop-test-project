import React from 'react';
import styled from 'styled-components';

const PriceHolder = styled.div`
  font-size: 1.2rem;
  ${({ styles }) => styles}
`;

export default function Price({ price, styles }) {
  return <PriceHolder styles={styles}>$ {price}</PriceHolder>;
}
