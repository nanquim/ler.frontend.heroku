import React from 'react'
import './styles.css'

const Evento = ({ item }) => {
 
  return ( 
     
    <article id="evento" className="">
        {/* <a href={item.url}></a> */}
        <div id="titulo" className="">
          {item.titulo}
        </div>
        <div id="data">
          Data: {item.data}
        </div>
        <div id="descricao">{item.descricao}</div>
        <div id="local">
          Local: {item.local}
        </div>
    </article>
  )
}

export default Evento;
