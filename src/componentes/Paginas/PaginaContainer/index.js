import React from 'react'
import './styles.css'

/* TODO 
      img alt 
      alternar posicionamento 
*/

const Pagina = ({ pagina }) => {
 
    // TODO alternar posicionamento 
    return (
        <div id="pagina">
            <div className="titulo text-center">
                <h4>{pagina.titulo}</h4>
            </div>
            <div className="corpo">
                <div className="imagem">
                    <img src={pagina.imgUrl} alt="" />
                     
                </div>
                <div className="texto">
                    {pagina.texto}
                </div>
            </div>
        </div>
    )
}

export default Pagina;
