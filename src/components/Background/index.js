import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Overlay } from './styles'
import GlobalStyle from '#/GlobalStyle'
import CartSidebar from '#/CartSidebar'
import Header from '#/Header'

const Background = () => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false)
  const browserHistory = useHistory()

  const openCartSidebar = () => {
    setIsCartSidebarOpen(true)
  }

  const closeCartSidebar = () => {
    setIsCartSidebarOpen(false)
  }

  const onHistoryChange = (event) => {
    closeCartSidebar()
  }

  browserHistory.listen(onHistoryChange)

  return (
    <>
      <GlobalStyle />
      <Overlay onClick={closeCartSidebar} isActive={isCartSidebarOpen} />
      <CartSidebar isOpen={isCartSidebarOpen} closeCartSidebar={closeCartSidebar} />
      <Header openCartSidebar={openCartSidebar} />
    </>
  )
}

export default Background
