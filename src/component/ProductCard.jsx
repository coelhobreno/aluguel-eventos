import styles from './ProductCard.module.css'

import React, { useEffect } from 'react'

import { useCartContextValues } from '../context/CartContext'

import { TbShoppingCartPlus } from 'react-icons/tb'
import currencyConverter from '../utils/currencyConverter'

const ProductCard = ({ product }) => {

  const { id, description, image, price } = product

  const { productsCart, setProductsCart } = useCartContextValues()

  const handleSubmit = (() => {
    const productExists = productsCart.find(prod => prod.id === id);

    if (productExists) {
      const updatedCart = productsCart.map((prod) =>
        prod.id == id ? { ...prod, qty: prod.qty + 1 } : prod
      );
      return setProductsCart([...updatedCart]);
    }

    const newProduct = {
      ...product,
      qty: 1
    }
    setProductsCart([...productsCart, newProduct])
  })

  return (

    <div className={styles.product_card}>
       <img src={image} alt="" />
       <p className={styles.product_description}>{description}</p>
       <p className={styles.product_price}>{currencyConverter(parseFloat(price), "BRL")}</p>
       <span className={styles.add_cart} 
       onClick={handleSubmit}
       ><TbShoppingCartPlus/></span>
    </div>
    
  )
}

export default ProductCard