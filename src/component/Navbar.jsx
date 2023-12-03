import styles from './Navbar.module.css'

import { useState } from 'react'

import { NavLink, useNavigate, Link } from 'react-router-dom'

//icons
import {  AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser  } from 'react-icons/ai'
import { MdOutlineMenu } from "react-icons/md";

//hooks personality
import { useCartContextValues } from '../context/CartContext'
import { AuthValue } from '../context/AuthContext'; 
 
const Navbar = () => {

  const { user } = AuthValue()

  const [search, setSearch] = useState("")
  const [isShowMenu, setIsShowMenu] = useState(false)
  
  const { productsCart, isShowCart, setIsShowCart } = useCartContextValues()

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    navigate(`/home?q=${search}`)
    
  }

  return (
    <nav>

      <div className={styles.active_redirect_area}>
        <button className={isShowMenu ? 'btn btn_icons white' : 'btn btn_icons'} onClick={() => setIsShowMenu(!isShowMenu)}><MdOutlineMenu/></button>
      </div>

      <div className={isShowMenu ? styles.redirect_area_responsive : styles.redirect_area}>
        <ul>
          <li><NavLink  to="/" className={({isActive}) => (isActive?styles.active:"")}>Sobre</NavLink></li>
          <li><NavLink to="/tips" className={({isActive}) => (isActive?styles.active:"")}>Dicas</NavLink></li>
        </ul>

        <form onSubmit={handleSubmit}>
            <AiOutlineSearch/>
            <input 
              type="text" 
              className='input_search' 
              placeholder='Pesquise algo...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type='submit'></button>
        </form>
      </div>
      
      <div className={styles.active_cart}>
          {user && <button className='btn btn_icons' onClick={() => setIsShowCart(!isShowCart)}><AiOutlineShoppingCart/>{productsCart.length > 0 && <span>{productsCart.length}</span>}</button>}
          {!user && <Link className='btn btn_icons' to="/login"><AiOutlineUser/></Link>}
      </div>
    </nav>
  )
}

export default Navbar
