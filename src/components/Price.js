import React from 'react';
import styled from 'styled-components';

const PriceHolder = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  ${({ styles }) => styles}
`;

const Price = ({ price, styles }) => {
  return <PriceHolder styles={styles}>$ {price}</PriceHolder>;
};

export default Price;
