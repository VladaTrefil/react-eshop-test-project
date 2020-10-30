import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductBySlug } from '~/helpers/products'
import { Wrapper, PageTitle, Button, Inner, Column } from './styles'
import ProductPhotos from '#/ProductPhotos'
import ProductInfo from '#/ProductInfo'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  const renderProduct = () => (
    <Inner>
      <Column>
        <ProductPhotos images={product.images} />
      </Column>
      <Column>
        <ProductInfo {...product} />
      </Column>
    </Inner>
  )

  const render404 = () => (
    <Wrapper>
      <PageTitle>Sorry, product was not found</PageTitle>
      <Button to="/products"> Products </Button>
    </Wrapper>
  )

  return <>{product ? renderProduct() : render404()}</>
}

export default ProductDetail
