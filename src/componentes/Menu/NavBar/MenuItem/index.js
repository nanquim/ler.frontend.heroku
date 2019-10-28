import React from 'react'
import './styles.css'

export const Link = ({ item }) => {
    return (
        <li className="menu-item" style={{ backgroundColor: item.cor }}>
            <a className="menu-link" href={item.href}>{item.titulo}</a>
        </li>
    )
} 

export const Logo = ({ logo }) => {
    return (
        <li className="menu-item">
            <a className="menu-link" href="/">
            <img src={logo} alt="ler.com"/>
            </a>
        </li>
        
    )
}

