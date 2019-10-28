import React, { useState, useEffect } from 'react';
import { GetArtigos } from '../../servicos';
import { trataData } from '../../util';
import Card from './Card';
import './styles.css'

/* 
TODO  Endpoint real
*/

function Blog() {

    const [artigos, setArtigos] = useState([])

    useEffect(() => {
        const fetchArtigos = async () => {
            const resp = await GetArtigos()
            const artigos = resp.map(artigo => {
                artigo.publishedAt = trataData(artigo.publishedAt)
                return artigo
            })
            setArtigos(artigos)
        }
        fetchArtigos()
    }, [])
  
    return (
        <div className="container-cards">
            <div className="grid-cards">
                {artigos.map((artigo, index) => (
                    <Card
                        key={index}
                        item={artigo}
                    />
                ))}
            </div>
        </div>

    )
}

export default Blog
