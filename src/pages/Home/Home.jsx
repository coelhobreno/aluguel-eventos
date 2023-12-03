import styles from './Home.module.css'

//components
import Menu from './component_home/Menu';
import Main from './component_home/Main';

const Home = () => {

  return (
    <div className={styles.containt}>
      <div className={styles.containt_container}>
        <Menu/>
        <Main/>
      </div>
    </div>
  )
}

export default Home
