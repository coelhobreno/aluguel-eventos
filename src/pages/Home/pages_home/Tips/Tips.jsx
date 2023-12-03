import styles from './Tips.module.css'

import React, { useState } from 'react'

import { itensTips } from './itensTips'

const Tips = () => {

  return (
    <div className={styles.tips}>
      <h2>Como Montar Sua Mesa Posta:</h2>
      {itensTips.map((item, index) => <div className={styles.tipsList} key={index}>
        <p>{item.title}</p>
        <ul>
        {item.list.map((itemList, indexList) => 
          <li key={indexList}>{itemList}</li>
        )}
        </ul>
      </div>)}
    </div>
  )
}

export default Tips
