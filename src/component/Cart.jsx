import styles from './Cart.module.css'

import React from 'react'

import CardCart from './CardCart'

import { IoMdClose } from "react-icons/io";

//context
import { useCartContextValues } from '../context/CartContext'
import currencyConverter from '../utils/currencyConverter';

const Cart = () => {

  const { productsCart, setProductsCart, isShowCart, setIsShowCart } = useCartContextValues()

  const totalPrice = productsCart.reduce((acc, item) => {
    return item.price*item.qty + acc
  }, 0)



  console.log(productsCart)

  return (
      
      <div className={styles.cart}> 

        <div className={styles.main_cart}>
          <div className={styles.header_cart}>
            <p className={styles.title}>Carrinho</p>

            <button className={styles.close} onClick={() => setIsShowCart(!isShowCart) }><IoMdClose/></button>
          </div>

          <div className={styles.show_products}>
            {productsCart && productsCart.map((product, index) => <CardCart key={index} product={product}/>)}
          </div>
        </div>

        <div className={styles.resume_cart}>
          <p className={styles.title_resume}>Total</p>
          <div>
            <p>{currencyConverter(totalPrice, 'BRL')}</p>
            <button className='btn' onClick={() => setProductsCart([])}>Limpar Carrinho</button>
          </div>
        </div>

      </div>

  )
}

export default Cart