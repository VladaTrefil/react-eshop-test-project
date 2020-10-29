import React from 'react'
import { Button, Container, ContainerLegend } from './styles'
import SubTotal from '#/SubTotal'

export default function CheckoutSummary() {
  return (
    <Container>
      <ContainerLegend>Summary:</ContainerLegend>
      <SubTotal />
      <Button>Transfer and Shipping</Button>
    </Container>
  )
}
