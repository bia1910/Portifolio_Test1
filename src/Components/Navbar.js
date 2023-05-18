import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import React from 'react';
import Img from '../Img/bz-logo-60.png';

const Navbar = () => {
    return (
      <nav className={styles.nav_total}>
        {/* <h1><Link to='/'>Beatriz Paez</Link></h1> */}
        <img src={Img}/>
      <ul className={styles.nav_menu}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Sobre'>Sobre</Link></li>
        <li><Link to='/Projetos'>Projetos</Link></li>
        <li><Link to='/Contato'>Contato</Link></li>
      </ul>
      </nav>
    )
}

export default Navbar