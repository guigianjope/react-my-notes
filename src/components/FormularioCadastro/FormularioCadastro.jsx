import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {


    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
    }

    handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value
    }

    handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value
    }

    criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render () {
        return (
            <form
                onSubmit={this.criarNota.bind(this)} 
                className="form-cadastro"
            >
                <input 
                    type="text" 
                    placeholder="Insert the title..." 
                    className="form-cadastro_input" 
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows={15}
                    placeholder="Insert your note..." 
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Create Note
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;