import React from 'react'
import AddToCart from '#/AddToCart'
import Price from '#/Price'
import { Container, Title, Description, Row, Stock, Brand } from './styles'

const ProductInfo = ({ id, name, category, brand, price, stock, description }) => {
  return (
    <Container>
      <Brand>{brand}</Brand>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Row>
        <Price price={price}></Price>
        <Stock>{stock} in stock right now</Stock>
      </Row>
      <AddToCart id={id} stock={stock}>
        Add to cart
      </AddToCart>
    </Container>
  )
}

export default ProductInfo
