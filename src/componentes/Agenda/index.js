import React from 'react'
import Evento from './Evento'
import config from '../../config/eventos.json'
import './styles.css'

const Agenda = () => {

    return (
        <div className="container-cards">
            <div className="grid-cards">
                {config.eventos.map((evento, index) => {
                    return <Evento
                        key={index}
                        item={evento}
                        /> 
                    })}
            </div>
        </div>
    )
}

export default Agenda;
