import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import styles from './Footer.module.css'

function Footer() {
    
    return (
        <footer className={styles.rodapeTodo}>
            <h1>Beatriz Paez</h1>
            <h2>Estudante e Desenvolvedora de Sistemas que está em busca em uma oportunidade de trabalho.</h2>
            <ul className={styles.rodape}>
                <li><a href="https://www.instagram.com/biaapaez/"><GrInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/beatriz-paez"><GrLinkedin /></a></li>
                <li><a href="https://github.com/bia1910"><GrGithub /></a></li>
            </ul>
        </footer>
    )
}

export default Footer