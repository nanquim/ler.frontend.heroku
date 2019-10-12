import React from 'react'
import '../styles.css'

const FormContato = () => {
    return (
        <div className="form-externo p-3 d-flex flex-column">
            <h3>Contato</h3>
            <div id="form-interno">
                <form action="" method="post">
                    <div className="form-group">
                        <label for="name">Nome: *</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email: *</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Mensagem</label>
                        <textarea class="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary ml-auto btn-enviar">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default FormContato;
