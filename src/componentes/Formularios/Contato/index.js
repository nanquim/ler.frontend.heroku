import React, { useState } from 'react'
import '../styles.css'

/** TODO
      chamada api
      reutilizar formularios
*/

const FormContato = () => {

    const campos = { nome: '', email: '', menssagem: '' }

    const [valores, setaValores] = useState(campos)

    const atualizaCampo = e => {
        setaValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const enviar = e => {
        e.preventDefault()
        console.log(valores)

        /* TODO se post sucesso... */
        reset()
    }

    const reset = () => {
        setaValores(campos)
    }

    return (
        <div className="container">
            <h3>Contato</h3>
            <form onSubmit={enviar} className="formulario-flex">
                <div className="linha">
                    <div className="coluna">
                        <div className="form-grupo">
                            <label htmlFor="name">Nome: <span>*</span></label>
                            <input
                                value={valores.nome}
                                onChange={atualizaCampo}
                                type="text"
                                className="form-controle"
                                name="nome"
                                id="nome"
                                required
                            />
                        </div>
                        <div className="form-grupo">
                            <label htmlFor="email">Email: <span>*</span></label>
                            <input
                                value={valores.email}
                                onChange={atualizaCampo}
                                type="email"
                                className="form-controle"
                                name="email"
                                id="email"
                                required />
                        </div>
                        <div className="form-grupo">
                            <label htmlFor="message">Mensagem: <span>*</span></label>
                            <textarea
                                value={valores.menssagem}
                                onChange={atualizaCampo}
                                type="text"
                                className="form-controle"
                                id="message"
                                name="menssagem"
                                rows="10"
                                required >
                            </textarea>
                        </div>
                    </div>
                </div>
                <div className="linha">
                    <button className="btn-enviar">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FormContato;
