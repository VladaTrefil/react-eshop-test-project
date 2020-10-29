import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductBySlug } from '~/helpers/products'
import { Inner, Column } from './styles'
import ProductPhotos from '#/ProductPhotos'
import ProductInfo from '#/ProductInfo'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  return (
    <Inner>
      <Column>
        <ProductPhotos images={product.images} />
      </Column>
      <Column>
        <ProductInfo {...product} />
      </Column>
    </Inner>
  )
}

export default ProductDetail
