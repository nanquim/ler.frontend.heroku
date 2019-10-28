import React from 'react'
import './styles.css'

const Card = ({ item }) => {
 
  return (
     
    <article id="artigo" className="">
        {/* <a href={item.url}></a> */}
        <div id="titulo" className="text-center">
          {item.title}
        </div>
        <div id="data">
          Data: {item.publishedAt}
        </div>
        <div id="imagem">
          <img src={item.urlToImage} alt="" />
        </div>
        <div id="texto">{item.description}</div>
    </article>
  )
}

export default Card;
