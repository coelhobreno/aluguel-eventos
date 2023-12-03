import styles from './CardCart.module.css'

import React from 'react'

//icons
import { PiTrashLight } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";

import { useCartContextValues } from '../context/CartContext'

const CardCart = ({ product }) => {

  const { description, price, id, qty, image } = product

  const { productsCart, setProductsCart } = useCartContextValues()

  const handleSubmit = () => {

    const existingProductIndex = productsCart.findIndex(prod => prod.id == id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...productsCart];

      if (updatedCart[existingProductIndex].qty > 1) {
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          qty: updatedCart[existingProductIndex].qty - 1
        };
      } else {
        updatedCart.splice(existingProductIndex, 1);
      }

      setProductsCart(updatedCart);
    }

  }

  return (
    <div className={styles.card_cart}>

        <img src={image} alt="" />
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>R${price}</p>
        <p>{qty}</p>
        <button className='btn btn_clear' onClick={handleSubmit}><FaTrashCan/></button>

    </div>
  )
}

export default CardCart