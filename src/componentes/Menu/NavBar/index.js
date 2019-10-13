import React from 'react'
import config from '../../../config/'
import logo from '../../../logo.png'
import Link from './Link'
import './styles.css'

/* TODO 
     const cores = [] 
     padrao do bs, nao arquivo css
     alternar cores no hover dos links de menu
     */

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="wp_brand">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="ler.com" />
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    {/* TODO key nao deveria ser index  */}
                    {config.links.map((item, index) => {
                        return <Link
                            key={index}
                            item={item}
                        />
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
