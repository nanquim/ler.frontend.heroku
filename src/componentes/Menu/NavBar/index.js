import React from 'react'
import config from '../../../config/menu.json'
import logo from '../../../assets/logo.png'
import { Link, Logo } from './MenuItem'
import './styles.css'


const NavBar = () => {
 
    return (
        <nav className="container-menu gruda-topo">
                <ul className="menu-grid">
                    {/* TODO key nao deveria ser index  */}
                    <Logo 
                       logo={logo}
                    />
                    {config.links.map((item, index) => {
                        return <Link
                            key={index}
                            item={item}
                        />
                    })}
                </ul>
        </nav>
    )
}

export default NavBar;
