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
        <div className="form-externo p-3 d-flex flex-column">
            <h3>Contato</h3>
            <div id="form-interno">
                <form onSubmit={enviar}>
                    <div className="form-group">
                        <label htmlFor="name">Nome: <span>*</span></label>
                        <input
                            value={valores.nome}
                            onChange={atualizaCampo}
                            type="text"
                            className="form-control"
                            name="nome"
                            id="nome"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: <span>*</span></label>
                        <input
                            value={valores.email}
                            onChange={atualizaCampo}
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem: <span>*</span></label>
                        <textarea
                            value={valores.menssagem}
                            onChange={atualizaCampo}
                            type="text"
                            className="form-control"
                            id="message"
                            name="menssagem"
                            rows="3"
                            required >
                        </textarea>
                    </div>
                    <button className="btn btn-primary btn-enviar">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default FormContato;
