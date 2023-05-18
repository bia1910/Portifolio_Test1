//import Navbar from './Components/Navbar';
import styles from './Sobre.module.css';
import Img from '../Img/csharp70.png';
import ImgMySQL from '../Img/mysql70.png';
import { SiCss3, SiHtml5, SiReact  } from "react-icons/si";
import { DiJava, DiJavascript1 } from "react-icons/di";
import { FaPhp } from "react-icons/fa";

function Sobre() {
    return (
        <div className={styles.tudo}>
         {/* <div className={styles.title}>
                <h1>Sobre mim...</h1>
            </div>  */}
            <div className={styles.text}>
            <h2><h1>Sobre mim...</h1>
                <br></br>Sou Beatriz Paez, tenho 17 anos e moro na
                    cidade de São Paulo - SP - Brasil. Atualmente
                    faço curso técnico de Desenvolvimento de Sistemas
                    integrado ao ensino médio em período integral na
                    ETEC Professora Ermelinda Giannini Teixeira, uma
                    unidade educacional do Centro Paula Sousa (CPS)
                    localizada em Santana de Parnaíba - SP.
                <br></br>
                {/* <br></br>
                    Nesta unidade, aprendi a desenvolver projetos em linguagens
                    variadas, entre elas, se incluem JavaScript, Java, PHP, CSS
                    e C#. Para desenvolver projetos em JavaScript, utilizo
                    React, React-Native e Nodejs. */}
                </h2>

                <div className={styles.cursos}>
                    <h1>Cursos</h1>
                    <div className={styles.cursosBlocos}>
                    <ul>
                        <li>Desenvolvimento de Sistemas<br/><br/>ETEC Ermelinda Giannini Teixeira<br/>Santana de Parnaíba, São Paulo - SP<br /> 2021 - 2023</li>
                        <li>Hardware <br/><br/>FATEC  <br/>Santana de Parnaíba, São Paulo - SP <br /> abril 2023 - setembro 2023</li>
                        <li>Inglês Básico <br/><br/>CNA <br/> Lapa, São Paulo - SP<br />  agosto 2022 - julho 2023</li>
                    </ul>
                    </div>
                </div>

                <div className={styles.habilidades}>
                    <h1>Habilidade em Programação</h1>

                    <div className={styles.habilidadesIcon}>

                        <div className={styles.habilidadesIconHTML}>
                            <li><SiHtml5 title='HTML' /></li>
                        </div>

                        <div className={styles.habilidadesIconJAVA}>
                            <li><DiJava title='JAVA'/></li>
                        </div>

                        <div className={styles.habilidadesIconJS}>
                            <li><DiJavascript1 title='JAVA SCRIPT'/></li>
                        </div>

                        <div className={styles.habilidadesIconCSharp}>
                            <img src={Img} title='C#'/>
                        </div>

                        <div className={styles.habilidadesIconREACT}>
                            <li><SiReact title='REACT e REACT NATIVE'/></li>
                        </div>

                        <div className={styles.habilidadesIconPhp}>
                            <li><FaPhp title='PHP'/></li>
                        </div>

                        <div className={styles.habilidadesIconCSS}>
                            <li><SiCss3 title='CSS'/></li>
                        </div>

                        <div className={styles.habilidadesIconMySQL}>
                            <img src={ImgMySQL} title='MySQL'/>
                        </div>
                    </div>
                </div>

                <div className={styles.img}>
                {/* <img src={Img}/> */}
            </div>
            </div>
        </div>
    )
}

export default Sobre;