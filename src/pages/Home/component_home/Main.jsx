import styles from './Main.module.css'

import React from 'react'

import Navbar from '../../../component/Navbar'
import { Outlet } from 'react-router-dom'
import Cart from '../../../component/Cart'
import { useCartContextValues } from '../../../context/CartContext'

const Main = () => {

  const { isShowCart } = useCartContextValues()
 
  return (
    <div className={styles.right_container}>
      <Navbar/>
      <div className={styles.outlet_containt}>
        <Outlet/>
      </div>
      {isShowCart && (
        <Cart/>
      )}
    </div>
  )
}

export default Main
