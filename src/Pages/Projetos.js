//import Navbar from './Components/Navbar';
import React from 'react';
import styles from './Projetos.module.css';
import ImgCRUD from '../Img/crudmarrom.png';
import ImgLoc from '../Img/locadora.png';
import ImgPortifolio from '../Img/bz-logo.png';


function Projetos() {
    return (
        <div className={styles.tudo}>
            <div className={styles.title}>
                <h1>Projetos</h1>
            </div>
        
            <div className={styles.projetos}>
                <div className={styles.projetosETEC}>
                    <h1>CRUD</h1>
                        <div className={styles.img}>
                            <img src={ImgCRUD}/>
                        </div>
                    <h2>De maneira simples, esse projeto vem com o intuito de realizar um CRUD (Create, Read, Update e 
                        Delete), ou seja, criar, ler, auterar e deletar dados. Foi desenvolvido utilizando a linguagem de 
                        programação PHP com Banco de Dados MySQL.</h2>
                </div>

                <div className={styles.projetosETEC}>
                    <h1>Locadora</h1>
                        <div className={styles.imgLoc}>
                            <img src={ImgLoc}/>
                        </div>
                    <h2>Projeto desenvolvido em C# com Banco de dados MySQL, tem a proposta de deselvolver um projeto 
                        simples de uma locadora de automóveis, onde mostra, deleta, altera e insere dados de tal. 
                        Produzido no ano de 2022. </h2>
                </div>
                
                <div className={styles.projetosETEC}>
                    <h1>Portifolio</h1>
                        <div className={styles.imgPort}>
                            <img src={ImgPortifolio}/>
                        </div>
                    <h2>Esse projeto, veio com a proposta de apresentar quem sou e alguns projetos que foram desenvolvidos
                        ao delongo da minha vida na área da programação. Desenvolvido em react, com linguagem JavaScript.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Projetos;