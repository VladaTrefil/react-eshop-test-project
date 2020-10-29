import React from 'react'
import { PriceHolder } from './styles'

const Price = ({ price, styles }) => {
  return <PriceHolder styles={styles}>$ {price}</PriceHolder>
}

export default Price
