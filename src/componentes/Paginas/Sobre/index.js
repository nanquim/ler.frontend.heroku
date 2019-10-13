import React from 'react'
import Pagina from '../PaginaContainer'
import config from '../../../config'
import './styles.css'

/*  */
function Sobre() {

    return (
        <>
            {/* TODO key nao deveria ser index  */}
            {config.paginas.map((pagina, index) => {
                return <Pagina
                    index={index}
                    pagina={pagina}
                />
            })}
        </>
    )
}

export default Sobre;

