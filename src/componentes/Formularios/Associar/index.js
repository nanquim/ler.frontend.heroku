import React, { useState } from 'react'
import '../styles.css'

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
        <div className="container">
            <h3>Associe-se!</h3>
            <form onSubmit={enviar} className="formulario-flex">
                <div className="linha">
                <div className="coluna">
                    <div className="form-grupo">
                        <label htmlFor="name">Nome Completo: <span>*</span></label>
                        <input
                            value={valores.nome}
                            onChange={atualizaCampo}
                            type="text"
                            className="form-controle"
                            name="nome"
                            id="name"
                            required
                        />
                    </div>
                    <div className="form-grupo">
                        <label htmlFor="email">E-mail: <span>*</span></label>
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
                        <label htmlFor="cpf">CPF: <span>*</span></label>
                        <input
                            value={valores.cpf}
                            onChange={atualizaCampo}
                            type="text"
                            className="form-controle"
                            name="cpf"
                            id="cpf"
                            required
                        />
                    </div>
                    <div className="form-grupo">
                    <label htmlFor="data_nascimento">Data de nascimento: <span>*</span>
                    </label> <br />
                    <input
                        value={valores.data_nascimento}
                        onChange={atualizaCampo}
                        type="date"
                        className="form-controle"
                        name="data_nascimento"
                        id="data_nascimento"
                        required />
                </div>
                </div>
                <div className="coluna">
                <div className="form-grupo">
                    <label htmlFor="data_venc_anuidade">
                        Preferência de data de vencimento da anuidade: <span>*</span>
                    </label>
                    <input
                        value={valores.data_vencimento}
                        onChange={atualizaCampo}
                        type="date"
                        className="form-controle"
                        name="nome"
                        id="data_venc_anuidade"
                        required
                    />
                </div>
                <div className="form-grupo">
                    É estudante? <br />
                    <div>
                        <input 
                            type="radio"
                            name="radioEstudante"
                            id="estudante" value="sim" checked />
                        <label for="estudante">
                            Sim
                        </label>
                    </div>
                </div>
                <div>
                    <input 
                        type="radio"
                        name="radioEstudante"
                        id="estudante" value="nao" checked />
                    <label for="estudante">
                        Não
                         </label>
                </div>
                </div>
                </div>
                <div className="linha">
                <button type="submit" className="btn-enviar">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FormAssociar;
