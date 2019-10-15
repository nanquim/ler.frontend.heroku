import React, { useState } from 'react'
import '../styles.css'

/* TODO form inline */

const FormAssociar = () => {

   const campos = { 
       nome: '',
       email: '', 
       cpf: '', 
       data_vencimento: '', 
       data_nascimento: '', 
       estudante: '' 
    }

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
            <h3>Associe-se!</h3>
            <div className="form-interno">
                <form onSubmit={enviar}>
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo: <span>*</span></label>
                        <input
                            value={valores.nome}
                            onChange={atualizaCampo}
                            type="text"
                            className="form-control"
                            name="nome"
                            id="name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail: <span>*</span></label>
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
                        <label htmlFor="cpf">CPF: <span>*</span></label>
                        <input
                            value={valores.cpf}
                            onChange={atualizaCampo}
                            type="text"
                            className="form-control"
                            name="cpf"
                            id="cpf"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="data_venc_anuidade">
                        Preferência de data de vencimento da anuidade: <span>*</span>
                        </label>
                        <input
                            value={valores.data_vencimento}
                            onChange={atualizaCampo}
                            type="date"
                            className="form-control"
                            name="nome"
                            id="data_venc_anuidade"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="data_nascimento">Data de nascimento: <span>*</span>
                        </label> <br />
                        <input
                            value={valores.data_nascimento}
                            onChange={atualizaCampo}
                            type="date"
                            className="form-control"
                            name="data_nascimento"
                            id="data_nascimento"
                            required />
                    </div>
                    <div className="form-group">
                        É estudante? <br />
                        <div className="form-check">
                            <input class="form-check-input" type="radio"
                                name="radioEstudante"
                                id="estudante" value="sim" checked />
                            <label class="form-check-label" for="estudante">
                                Sim
                            </label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input class="form-check-input" type="radio"
                            name="radioEstudante"
                            id="estudante" value="nao" checked />
                        <label class="form-check-label" for="estudante">
                            Não
                         </label>
                    </div>
                    <button className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default FormAssociar;
