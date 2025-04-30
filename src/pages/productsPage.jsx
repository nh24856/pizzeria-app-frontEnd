import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ProductHeading from '../components/headings/productHeading'
import ProductsLayout from '../layout/productsLayout'

const ProductsPage = () => {
  return (
    <>
      <Navbar/>
        <ProductHeading text='Pizza Menu' />
        <ProductsLayout/>
      <Footer/>
      </>
  )
}

export default ProductsPage
