import React, { useState } from 'react';
import { FaSearch, FaFacebook, FaInstagram } from "react-icons/fa";
import './styles.css'

const UpperBar = () => {

    const [ query, setQuery ] = useState('')
 
    const atualizaQuery = e => {
        e.preventDefault()
        setQuery(e.target.value)
    } 

    const pesquisar = e => {
        //enviar....
    }
   
    return (
        <div className="upperbar">
            <div className="pesquisa">
                <input 
                    value={query}
                    onChange={atualizaQuery}
                    name=""
                    id=""
                    type="text" 
                    placeholder="Pesquisar..."/>

                <button 
                    onClick={pesquisar}
                    className="btn-pesquisar"
                    >
                    <FaSearch 
                        color="#023373"
                        size="30px"/>
                </button>
            </div>
            <div className="social">
                {/* TODO componente a */}
                <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.instagram.com/ler.comassociacao/?igshid=3bsbr5grtypi">
                    <i><FaInstagram size="40px" color="#023373" /></i>
                </a>
                <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.facebook.com/ler.comassociacao/">
                    <i><FaFacebook size="40px" color="#023373" /></i>
                </a>
            </div>
        </div>
    )
}

export default UpperBar;
