import styles from './NotProduct.module.css'

import React from 'react'

const NotProduct = () => {
  return (
    <div className={styles.not_product}>
        <h2>Produto não encontrado!</h2>
        <p>Desculpe, o produto que você procura não está disponível no momento. Explore nossa variedade de produtos ou entre em contato conosco para mais informações. Agradecemos sua compreensão!</p>
    </div>
  )
}

export default NotProduct
