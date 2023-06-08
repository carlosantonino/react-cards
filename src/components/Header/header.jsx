import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
                <span>Carlos Antonino.dev</span>
                <nav>
                    <a href=''>Home</a>
                    <a href=''>Sobre</a>
                    <a href=''>Projetos</a>
                    <a href=''>Contatos</a>
                </nav>
        </header>
    )
}