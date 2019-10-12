import React from 'react';
import { FaSearch, FaFacebook } from "react-icons/fa";
import './styles.css'

/* TODO cor logo facebook */

const BarraSuperior = () => {
  
    return (
        <div className="px-3 py-1 d-flex flex-row">
            <div id="busca" className="d-flex flex-row">
                <input type="text" className="mr-2 form-control" placeholder="Pesquisar..."/>
                <FaSearch size="30px"/>
            </div>
            <div className="social ml-auto">
                <a
                    target="_blansk" rel="noopener noreferrer"
                    href="https://www.facebook.com/ler.comassociacao/">
                    <i><FaFacebook size="30px"/></i>
                </a>
            </div>
        </div>
    )
}

export default BarraSuperior;
