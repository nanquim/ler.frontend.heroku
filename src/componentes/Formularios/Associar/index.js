import React from 'react'
import '../styles.css'

/* TODO retirar br, melhorar layout */
 
const FormAssociar = () => {
    return (
        <div className="form-externo p-3 d-flex flex-column">
            <h2>Associe-se!</h2>
            <div className="form-interno">
                <form action="" method="post">
                    <div className="form-group">
                        <label for="email">Endereço de e-mail: *</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                        <label for="name">Nome completo: *</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label for="cpf">CPF: *</label>
                        <input type="number" className="form-control" id="cpf" required />
                    </div>
                    <div className="form-group">
                        <label for="data_venc_anuidade">Preferência data de vencimento da anuidade: *</label>
                        <input type="date" className="form-control" id="data_venc_anuidade" required />
                    </div>
                    <div className="form-group">
                        <label for="data_nascimento">Data de nascimento: *</label> <br />
                        <input type="date" classNameCPF="form-control" id="data_nascimento" required />
                    </div>
                    <div className="form-group">
                        É estudante? <br />
                    <div className="form-check">
                            <input class="form-check-input" type="radio"
                                name="exampleRadios"
                                id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Default radio
                              </label>
                        </div>
                    </div>
                        <div className="form-check">
                            <input class="form-check-input" type="radio"
                                name="exampleRadios"
                                id="exampleRadios1" value="option2" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Default radio
                              </label>
                        </div>
                    <button type="submit" className="btn btn-primary ml-auto btn-enviar">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default FormAssociar;
