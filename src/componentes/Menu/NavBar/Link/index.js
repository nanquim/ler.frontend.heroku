import React from 'react'

const MenuLink = ({ item }) => {
    return (
        <li className="nav-item" style={{ backgroundColor: item.cor }}>
            <a className="nav-link" href={item.href}>{item.titulo}</a>
        </li>
        
    )
}

export default MenuLink;
