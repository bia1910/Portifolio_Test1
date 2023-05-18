//import Navbar from './Components/Navbar';
import React from 'react';
import styles from './Home.module.css';
import Img from '../Img/quadrado-pontas-redondas.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

//const foto = "quadrado.png"
const Home = () => {

    function Home() {
        <Link to='/Sobre'>Sobre</Link>
    }

    return (
        <div className={styles.tudo}>
            <div className={styles.titulo}>
                <h1>Olá, sou <br></br> Beatriz Paez. <br></br> 
                <h2>Seja bem vindo ao meu portifólio!</h2>
                <h3 href="https://instagram.com/biaapaez/"> Systems Developer </h3></h1>
            </div>

            <div className={styles.img}>
                <img src={Img}/>
            </div>
            
        </div>

        
    )
}


export default Home;