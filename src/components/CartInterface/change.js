import React, { useState } from 'react'
import { useUserState } from '~/context/user'
import NumberInput from '#/NumberInput'

const ChangeQuantity = ({ id, stock, quantity }) => {
  const [{ cart }, dispach] = useUserState()

  const dispatchQuantity = (quantity) => {
    dispach({
      type: 'CHANGE_ITEM_QUANTITY',
      product: { id, newQuantity: quantity },
    })
  }

  return <NumberInput max={stock} value={quantity} updateChanges={(value) => dispatchQuantity(value)} />
}

export default ChangeQuantity
