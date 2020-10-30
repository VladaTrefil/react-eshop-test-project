import React, { useState } from 'react'
import GlobalStyle from '#/GlobalStyle'
import CartSidebar from '#/CartSidebar'
import Header from '#/Header'

const Background = () => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false)

  const openCartSidebar = () => {
    setIsCartSidebarOpen(true)
  }

  const closeCartSidebar = () => {
    setIsCartSidebarOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <CartSidebar isOpen={isCartSidebarOpen} closeCartSidebar={closeCartSidebar} />
      <Header openCartSidebar={openCartSidebar} />
    </>
  )
}

export default Background
