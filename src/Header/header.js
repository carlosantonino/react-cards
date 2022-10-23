import React from 'react';
import './header.css'

export default function Header() {
    return(
        <header>
                <h1>Logo</h1>
                <ul>
                    <li><a href='/'>Inicio</a></li>
                    <li><a href='/'>Sobre</a></li>
                    <li><a href='/'>Contato</a></li>
                </ul>
        </header>
    )
}