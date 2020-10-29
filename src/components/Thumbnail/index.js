import React from 'react'
import { ImageHolder, Image } from './styles'

export default function Thumbnail({ src, styles }) {
  return (
    <ImageHolder styles={styles}>
      <Image src={src} />
    </ImageHolder>
  )
}
