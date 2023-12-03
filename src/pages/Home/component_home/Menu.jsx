import styles from './Menu.module.css'

import { Link } from 'react-router-dom'

//icons
import { AiOutlineHome } from "react-icons/ai";
import { LuUtensils } from "react-icons/lu";
import { FaGlassCheers, FaMagic } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";
import { AiOutlineSound } from "react-icons/ai";
import { AuthValue } from '../../../context/AuthContext';
import { IoMdLogOut } from "react-icons/io";
import { useAuthentication } from '../../../hooks/useAuthentication';

const Menu = () => {

  const { user } = AuthValue()
  const { logout } = useAuthentication()

  return (
    <div className={styles.menu_container}>
        {/* Left container */}
        <div className={styles.left_container}>
            <h2>Alugue<span>Aqui</span></h2>
            <ul>
                <li><Link to="/home?q="><AiOutlineHome/><span>Início</span></Link></li>
                <li><Link to="/home?q=garfo+faca+colher"><LuUtensils/><span>Talheres</span></Link></li>
                <li><Link to="/home?q=taça+copo+champ"><FaGlassCheers/><span>Taças e cia</span></Link></li>
                <li><Link to="/home?q=rechauds"><FaBowlFood/><span>Rechauds</span></Link></li>
                <li><Link to="/home?q=chá+café"><FiCoffee /><span>Chá e Café</span></Link></li>
                <li><Link to="/home?q=decoração"><FaMagic /><span>Decoração</span></Link></li>
                <li><Link to="/home?q=som"><AiOutlineSound /><span>Som</span></Link></li>
            </ul>
            
            {user && (
              <div className={styles.info_user}>
                <h3>{user.displayName}</h3>
                <button className='btn btn_icons' onClick={() => logout()}><IoMdLogOut/></button>
              </div>
            )}
        </div>
      </div>
  )
}

export default Menu
