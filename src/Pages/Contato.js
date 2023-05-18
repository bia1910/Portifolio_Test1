//import Navbar from './Components/Navbar';
import {React, useState} from 'react';
import styles from './Contato.module.css';

function Contato() {

    function cadContato(e) {
        //para não dar load na pagina
        e.preventDefault();
        alert('Sua mensagem foi enviada '+ nome);
    }

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [tel, setTel] = useState()
    const [msg, setMsg] = useState()

    return (
        <div className={styles.tudo}>
            <h1>Contato</h1>
            <h2>Para entrar em contato, preencha o formulário abaixo.</h2>
            <div className={styles.form}>
                <form onSubmit={cadContato}>
                    <div className={styles.formLinhas}>
                        <input type="text" placeholder="Nome" onChange={e=> setNome(e.target.value)}/>
                        <br />
                        <input type="text" placeholder="Email" onChange={e=> setEmail(e.target.value)}/>
                        <br/>
                        <input type="text" placeholder="Telefone" onChange={e=> setTel(e.target.value)}/>
                        <br/>
                    </div>
                    <div className={styles.formMsg}>
                        <textarea name="comment" placeholder="Mensagem" onChange={e=> setMsg(e.target.value)}/>
                    </div>
                    <div className={styles.formBtn}>
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contato;